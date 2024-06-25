import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../../services/operations/SettingAPI";
import IconBtn from "../../../common/IconBtn";

const locationOptions = ["Pimpri-Chinchwad", "Pune", "Hinjewadi"];

export default function AddPost() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const submitProfileForm = async (data) => {
    try {
      setLoading(true);
      const owner = user._id;
      const formData = new FormData();
      formData.append("thumbnailImage", imageFile);
      formData.append("bhaji", data.bhaji);
      formData.append("price", data.price);
      formData.append("location", data.location);
      formData.append("about", data.about);
      formData.append("area", data.area);
      formData.append("description", data.description);
      formData.append("date", data.date);
      formData.append("owner", owner);

      await dispatch(addPost(token, formData));
      setLoading(false);
      // eslint-disable-next-line
      { navigate("/dashboard/my-posts") };
    } catch (error) {
      setLoading(false);
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile);
    }
  }, [imageFile]);

  return (
    <>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
        <div className="flex items-center flex-col md:flex-row gap-x-4">
          <img src={previewSource} alt="Img" className="aspect-square w-[78px] rounded-full object-cover" />
          <div className="space-y-2 flex flex-col md:flex-row">
            <p>Add Food Plate Image</p>
            <div className="flex flex-col md:flex-row gap-3">
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/png, image/gif, image/jpeg" />
              <button onClick={handleClick} disabled={loading} className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50">
                Select
              </button>
              <IconBtn text={loading ? "Uploading..." : "Upload"} onClick={handleSubmit(submitProfileForm)}>
                {!loading && <FiUpload className="text-lg text-richblack-900" />}
              </IconBtn>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(submitProfileForm)}>
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">Mess Information</h2>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="bhaji" className="label-style text-richblack-5">Bhaji</label>
              <input type="text" name="bhaji" id="bhaji" placeholder="Enter Bhaji" className="form-style" {...register("bhaji", { required: true })} />
              {errors.bhaji && (<span className="-mt-1 text-[12px] text-yellow-100">Please enter Bhaji</span>)}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="price" className="label-style text-richblack-5">Price</label>
              <input type="text" name="price" id="price" placeholder="Enter Price" className="form-style" {...register("price", { required: true })} />
              {errors.price && (<span className="-mt-1 text-[12px] text-yellow-100">Please enter Price</span>)}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="location" className="label-style text-richblack-5">Location</label>
              <select name="location" id="location" className="form-style" {...register("location", { required: true })}>
                {locationOptions.map((ele, i) => (
                  <option key={i} value={ele}>{ele}</option>
                ))}
              </select>
              {errors.location && (<span className="-mt-1 text-[12px] text-yellow-100">Please enter your Location</span>)}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="about" className="label-style text-richblack-5">About</label>
              <input type="text" name="about" id="about" placeholder="Enter Details" className="form-style" {...register("about", { required: true })} />
              {errors.about && (<span className="-mt-1 text-[12px] text-yellow-100">Please enter More.</span>)}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="area" className="label-style text-richblack-5">Enter the Specific Area</label>
              <input type="text" name="area" id="area" placeholder="Enter Specific area" className="form-style" {...register("area", { required: true })} />
              {errors.area && (<span className="-mt-1 text-[12px] text-yellow-100">Please enter More Specific About Area.</span>)}
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="description" className="label-style text-richblack-5">Have a Description</label>
            <input type="text" name="description" id="description" placeholder="Enter Description" className="form-style" {...register("description", { required: true })} />
            {errors.description && (<span className="-mt-1 text-[12px] text-yellow-100">Please enter Description.</span>)}
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="date" className="label-style text-richblack-5">Date</label>
            <input type="date" name="date" id="date" className="form-style" {...register("date", { required: true })} />
            {errors.date && (<span className="-mt-1 text-[12px] text-yellow-100">Please enter Date.</span>)}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={() => { navigate("/dashboard/my-posts") }} className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50">
            Cancel
          </button>
          <IconBtn type="submit" text="Save" />
        </div>
      </form>
    </>
  );
}

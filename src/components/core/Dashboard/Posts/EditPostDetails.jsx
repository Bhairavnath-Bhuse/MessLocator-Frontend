import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPostDetails } from "../../../../services/operations/SettingAPI";
import IconBtn from "../../../common/IconBtn";

const location = ["Pimpri-Chinchwad", "Pune", "Hinjewadi"];

export default function EditPostDetails(props) {
  const { foodId } = props;
  const { token } = useSelector((state) => state.auth);
  // localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
  // 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitProfileForm = async (data) => {
    try {
      // console.log("Did you know what inside the post props in EditPostDetails ", foodId);
      const data2 = { ...data, foodId };

      console.log("Printing the data from edit post details ", data2);
      dispatch(editPostDetails(token, data2));
      // console.log("Token after the request ",token);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitProfileForm)}>
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5"> Mess Information </h2>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="bhaji" className="label-style text-richblack-5"> Bhaji </label>
              <input type="text" name="bhaji" id="bhaji" placeholder="Enter Bhaji" className="form-style" {...register("bhaji", { required: true })} />
              {errors.bhaji && (<span className="-mt-1 text-[12px] text-yellow-100"> Please enter Bhaji </span>)}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="price" className="label-style text-richblack-5"> Price </label>
              <input type="text" name="price" id="price" placeholder="Enter Price" className="form-style" {...register("price", { required: true })} />
              {errors.price && (<span className="-mt-1 text-[12px] text-yellow-100"> Please enter Price </span>)}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="location" className="label-style text-richblack-5"> Location </label>
              <select name="location" id="location" className="form-style" {...register("location", { required: true })}>
                {location.map((ele, i) => (
                  <option key={i} value={ele}>{ele}</option>
                ))}
              </select>
              {errors.location && (<span className="-mt-1 text-[12px] text-yellow-100"> Please enter your Location</span>)}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="about" className="label-style text-richblack-5"> About </label>
              <input type="text" name="about" id="about" placeholder="Enter Details" className="form-style" {...register("about", { required: true })} />
              {errors.about && (<span className="-mt-1 text-[12px] text-yellow-100"> Please enter More. </span>)}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="area" className="label-style text-richblack-5"> Enter the Specific Area </label>
              <input type="text" name="area" id="area" placeholder="Enter Specific area" className="form-style" {...register("area", { required: true })} />
              {errors.area && (<span className="-mt-1 text-[12px] text-yellow-100"> Please enter More Specific About Area. </span>)}
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="description" className="label-style text-richblack-5"> Have a Description </label>
            <input type="text" name="description" id="description" placeholder="Enter Description" className="form-style" {...register("description", { required: true })} />
            {errors.description && (<span className="-mt-1 text-[12px] text-yellow-100"> Please enter Description. </span>)}
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="date" className="label-style text-richblack-5"> Date </label>
            <input type="date" name="date" id="date" className="form-style" {...register("date", { required: true })} />
            {errors.date && (<span className="-mt-1 text-[12px] text-yellow-100"> Please enter Date. </span>)}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={() => { navigate("/dashboard/my-profile") }} className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50">
            Cancel
          </button>
          <IconBtn type="submit" text="Save" />
        </div>
      </form>
    </>
  );
}

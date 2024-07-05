import Review from "./Review";
import CTAButton from "../home/Button";
import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { useDispatch } from 'react-redux';
import { deletePost } from "../../../services/operations/SettingAPI";

const PageDetailsSecI = (props) => {
    const { post } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // console.log("User from Post from PageDetailsSecI", post);

    const { user } = useSelector((state) => state.profile);
    // console.log("User from Local Storage Details from PageDetailsSecI", user);

    const dateStr = post.date;
    const date = new Date(dateStr);

    // Get the day of the week
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    // Format the date part
    const datePart = date.toISOString().split('T')[0];

    // Combine the date and day of the week
    const formattedDate = `${datePart}, ${dayOfWeek}`;
    const { token } = useSelector((state) => state.auth);

    const handleDelete = () => {
        const foodId = post._id;
        dispatch(deletePost(token, foodId));
        navigate("/");
    };

    return (
        <div className="w-full md:w-11/12 mx-auto p-4">
            {/* Wrapper */}
            <div className="w-full">
                {/* Upper Box */}
                <div className="flex flex-col sm:flex-row justify-center sm:gap-4">
                    {/* Left Side */}
                    <div className="w-full sm:w-1/2 p-2 sm:mr-4 mb-4">
                        {/* Owner Info */}
                        <div className="flex items-center gap-x-2 mb-4">
                            <div>
                                {post.owner_photo ? (
                                    <img
                                        src={post.owner_photo}
                                        alt={post.title}
                                        className="rounded-full h-[40px] w-[40px]"
                                    />
                                ) : (
                                    <img
                                        src="https://www.pngitem.com/pimgs/m/521-5211656_cute-cartoon-characters-boy-hd-png-download.png"
                                        className="h-[40px] w-[40px] rounded-full"
                                        alt=" "
                                    />
                                )}
                            </div>
                            <p className="text-lg text-richblack-900 font-mono">{post.owner_name ? post.owner_name : 'Anonymous'}</p>
                            {user && post.owner === user._id && (
                                <CTAButton active={true} linkto={`dashboard/edit-post/${post._id}`} className="ml-5"> 
                                    Edit <RiEditBoxLine className="ml-2" />
                                </CTAButton>
                            )}
                        </div>
                        {post.thumbnailImage ? (
                            <img
                                src={post.thumbnailImage}
                                alt="post"
                                className="rounded-xl w-full h-[250px] object-cover"
                            />
                        ) : (
                            <img
                                className="rounded-xl w-full h-[250px] object-cover"
                                src="https://i.imgur.com/QYWAcXk.jpeg"
                                alt="Post"
                            />
                        )}
                        <div className="flex flex-col gap-3 mt-3">
                            <h4 className="text-richblack-900 font-semibold"><span className="text-xl font-bold font-mono">Bhaji:</span> {post.bhaji.toUpperCase()}</h4>
                            <p className="text-richblack-900"><span className="text-xl font-bold font-mono">With:</span> {post.about}</p>
                            <p className="text-richblack-900"><span className="text-xl font-bold font-mono">Price:</span> {post.price}</p>
                            <p className="text-richblack-900"><span className="text-xl font-bold font-mono">Date:</span> {formattedDate}</p>
                            <p className="text-richblack-900"><span className="text-xl font-bold font-mono">City:</span> {post.location}</p>
                            <p className="text-richblack-900"><span className="text-xl font-bold font-mono">Area in {post.location}:</span> {post.area}</p>
                            <p className="text-richblack-900"><span className="text-xl font-bold font-mono">About:</span> {post.description}</p>
                            {user && post.owner === user._id && (
                                <button
                                    className="bg-[#e11d48] text-white font-bold py-2 px-4 rounded mt-3"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full sm:w-1/2 p-2">
                        <Review post={post} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageDetailsSecI;

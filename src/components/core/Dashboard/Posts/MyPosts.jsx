import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiConnector } from "../../../../services/operations/apiconnector";
import { profileEndpoints } from "../../../../services/operations/api";
import Card from "../../category/Card";
import { useSelector } from "react-redux";
// import { toast } from "react-hot-toast"
import NotFound from "../../../../assests/NotFound2.png"

const MyPosts = () => {
    const [posts, setPosts] = useState([]);
    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const userId = user ? user._id : null;

    // console.log("Value of Token is ",token)
    const getOwnerFoodPost = async () => {
        if (!userId) {
            console.error("User ID is null or undefined");
            toast.error("User ID is not available.");
            return;
        }
        const toastId = toast.loading("Loading...")

        try {
            // console.log("API url is ", profileEndpoints.GET_OWNER_POST_LIST, "and owner id is ", userId);
            // console.log("API uRL before is ",`${profileEndpoints.GET_OWNER_POST_LIST}?ownerId=${userId}`)
            const response = await apiConnector(
                "GET",
                `${profileEndpoints.GET_OWNER_POST_LIST}?ownerId=${userId}`,
                null,
                {
                        Authorization: `Bearer ${token}`,
                }
            );

            // console.log("API uRL after is ",`${profileEndpoints.GET_OWNER_POST_LIST}?ownerId=${userId}`)


            if (response.status === 200) {
                // console.log("Fetched posts:", response.data.data);
                setPosts(response.data.data); // Assuming your data is in response.data.data
            } else {
                console.error(`Failed to fetch data. Status: ${response.status}`);
                toast.error('Unable to fetch the post, please try later');
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                console.error("Unauthorized: Check your token");
                toast.error('Unauthorized: Please log in again.');
            } else {
                console.error("Error while fetching the data:", err);
                toast.error('Unable to fetch the post, please try later');
            }
        }

        toast.dismiss(toastId)
    };

    useEffect(() => {
        getOwnerFoodPost();
        // eslint-disable-next-line
    }, [userId]); // Depend on userId

    return (
        <div>
            <ToastContainer />
            <div className='mt-[44px] mx-auto flex flex-row gap-4 w-11/12 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-evenly pt-4 flex-wrap'>
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card mb-8'>
                            <Card key={post._id} post={post} />
                        </div>
                    ))
                ) : (
                    <div>
                        <img src= {NotFound} alt=" Page Not Found " className=" h-[70%] w-[70%] flex items-center mx-auto rounded-md"/>
                     </div>
                )}
            </div>
        </div>
    );
};

export default MyPosts;

import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import { apiConnector } from "../../../services/operations/apiconnector";
import { postEndpoints } from "../../../services/operations/api";
import Card from "./Card";
import Skeleton from "./Skeleton";
import NotFound from "../../../assests/NotFound.jpeg"

const AllPost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCategories = async () => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("GET", postEndpoints.ALL_FOOD_POST);
            if (response.status === 200) {
                setPosts(response.data.data); // Assuming your data is in response.data.data
                toast.dismiss(toastId);
            } else {
                console.error(`Failed to fetch data. Status: ${response.status}`);
                toast.error('Unable to fetch the post, please try later');
                toast.dismiss(toastId);
            }
        } catch (err) {
            console.log("Error while fetching the data:", err);
            toast.error('Unable to fetch the post, please try later');
            toast.dismiss(toastId);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
            <ToastContainer />
            <div className='mt-[44px] mx-auto w-11/12 flex flex-row gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-evenly pt-4 flex-wrap'>
                {loading ? (
                    <div className="flex flex-col w-[80%] mb-16 justify-between md:flex-row">
                    <Skeleton/>
                    <Skeleton/>
                </div>
                ) : (
                    Array.isArray(posts) && posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post._id} className='post-card mb-8'>
                                <Card key={post._id} post={post} />
                            </div>
                        ))
                        
                    ) : (
                        <div>
                        <img src= {NotFound} alt=" Page Not Found " className=" h-[70%] w-[70%] flex items-center mx-auto rounded-md"/>
                        </div>
                    )
                    
                    
                )}
            </div>
        </div>
    );
};

export default AllPost;

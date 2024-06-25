import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiConnector } from "../../../services/operations/apiconnector";
import { catalogData } from "../../../services/operations/api";
// require("dotenv").config();
import Card from "./Card"

const CategoryPost = (props) => {
    const [posts, setPosts] = useState([]);
    const { category } = props;
    console.log("Printing category value in catPost", category);

    const getCategories = async () => {
        try {
            console.log("Printing url");
            const response = await apiConnector("GET", 
                `${catalogData.CATALOGPAGEDATA_API}?location=${category}`
            );
            
            if (response.status === 200) {
                setPosts(response.data.data); // Assuming your data is in response.data.data
            } else {
                console.error(`Failed to fetch data. Status: ${response.status}`);
                toast.error('Unable to fetch the post, please try later');
            }
        } catch (err) {
            console.log("Error while fetching the data:", err);
            toast.error('Unable to fetch the post, please try later');
        }
    };

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line
    }, [category]); // Added category as a dependency

    return (
        <div>
            <ToastContainer />
            <div className='mt-[44px] mx-auto flex  flex-row gap-4 w-11/12 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-evenly pt-4 flex-wrap'>
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card mb-8'>
                            <Card key={post._id} post={post} />
                        </div>
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPost;

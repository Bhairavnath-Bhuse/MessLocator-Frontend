import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiConnector } from '../../../services/operations/apiconnector';
import PageDetailsSecI from './PageDetailsSecI';

const PageDetails = () => {
    const { postId } = useParams();
    // console.log("Post Id in PageDetails is ", postId)
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await apiConnector('GET', `http://localhost:4000/api/v1/mess/getFoodPost?foodId=${postId}`);

                // console.log("Response from BackEnd ", response);

                if (response.status === 200) {
                    setPost(response.data.data[0]);
                } else {
                    console.error(`Failed to fetch data. Status: ${response.status}`);
                    toast.error('Unable to fetch the post, please try later');
                }
            } catch (err) {
                console.error('Error while fetching the data:', err);
                toast.error('Unable to fetch the post, please try later');
            }
        };

        fetchPostDetails();
    }, [postId]); // Adding postId as a dependency to fetch new data when the postId changes

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <PageDetailsSecI post={post} />
        </div>
    );
};

export default PageDetails;

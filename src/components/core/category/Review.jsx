import React, { useState, useEffect, useRef } from 'react';
import { apiConnector } from '../../../services/operations/apiconnector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading2 from './Loading2';
import { MdDeleteOutline } from 'react-icons/md';

const Review = (props) => {
    const { post } = props;
    const [reviews, setReviews] = useState(null);
    const [mycomment, setmycomment] = useState("");
    const [isfocused, setisfocused] = useState(false);
    const [isCommentLoading, setisCommentLoading] = useState(false);

    const formRef = useRef(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            if (!post) return;

            try {
                const response = await apiConnector('GET', `http://localhost:4000/api/v1/mess/getReviews?foodId=${post._id}`);

                if (response.status === 200) {
                    setReviews(response.data.data);
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
    }, [post]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const handleSubmit = async () => {
        setisCommentLoading(true);
        const bodyData = {
            foodId: `${post._id}`,
            review: mycomment,
        };
        console.log("Data in handle submit of review ",bodyData)

        try {
            const token = localStorage.getItem('token');

            if (!token || token === 'null') {
                toast.error('Please Log In to Continue');
                setisCommentLoading(false);
                return;
            }

            const response = await fetch('http://localhost:4000/api/v1/mess/createRating', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(bodyData),
            });

            if (response.status === 200) {
                toast.success('Review Posted Successfully!');
                const updatedReviews = await response.json();
                setReviews(updatedReviews.data.data);
                setmycomment(''); // Clear comment input after successful submission
            } else {
                console.error(`Failed to post review. Status: ${response.status}`);
                toast.error('Unable to post the comment, please try later');
            }
        } catch (err) {
            console.log('Error while posting the review:', err);
            toast.error('Unable to post the comment, please try later');
        } finally {
            setisCommentLoading(false);
        }
    };

    return (
        <div className='w-11/12 mx-auto  m-4'>
            <ToastContainer />
            <div className='flex flex-col sm:mt-16  gap-3'>
                <hr style={{ border: "1px reach-black-400 " }} />
                <h2 className='font-mono text-xl  '>Total Reviews: {reviews ? reviews.length : 0}</h2>
                <hr style={{ border: "1px reach-black-400 " }} />

                <textarea 
                    value={mycomment}
                    onChange={(e) => setmycomment(e.target.value)}
                    placeholder="Write your review here . . . ."
                />
                <button onClick={handleSubmit} disabled={isCommentLoading}
                className={`text-center text-[13px] sm:text-[16px] px-6 mx-auto py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-yellow-50 text-black`}
                >
                    {isCommentLoading ? <Loading2 /> : 'Submit Review'}
                </button>

                {reviews && reviews.map((rev, index) => (
                    <div key={index} className='pb-1'>
                        <div className="flex gap-x-2">
                            {rev.userProfile ? (
                                <img 
                                    src={rev.userProfile} 
                                    alt={post.title} 
                                    className="rounded-full h-[30px] w-[30px]" 
                                    width="300" 
                                    height="200" 
                                />
                            ) : (
                                <img 
                                    src="https://www.pngitem.com/pimgs/m/521-5211656_cute-cartoon-characters-boy-hd-png-download.png"
                                    className="h-[30px] w-[30px] rounded-full" 
                                />
                            )}
                            <p className='font-mono'>{rev.userName ? rev.userName : 'Anonymous'}</p>
                        </div>
                        <p className='mb-2'> {rev.review}</p>
                        <hr style={{ border: "1px reach-black-400 " }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Review;
import React from "react";
import "./style.css";
import CTAButton from "../home/Button"

const Card = (props) => {
    const { post } = props;
    // console.log("Printing the Post Id ",post._id)


    const dateStr = post.date;
    const date = new Date(dateStr);

    // Get the day of the week
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    // Format the date part
    const datePart = date.toISOString().split('T')[0];

    // Combine the date and day of the week
    const formattedDate = `${datePart}, ${dayOfWeek}`;

    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
      }

    return (
        <div>

           <div className="box-shadow" >
            <div>
                {post.thumbnailImage ? (
                        <img 
                            src={post.thumbnailImage} 
                            alt={post.title} 
                            className="rounded-xl h-[220px] w-[320px]   " 
                            // width="300" 
                            // height="200" 
                        />
                    ) : (
                        <img
                            className="rounded-xl h-[220px] w-[320px] "
                            src="https://i.imgur.com/QYWAcXk.jpeg"
                            alt="post"
                            // width="300" 
                            // height="200"
                            
                        />
                    )}
                </div>
                <div className="flex flex-col gap-2 ml-3">
                    <h1 className=" text-richblack-900 text-lg mt-2 font-mono font-bold">
                        {post.bhaji.toUpperCase()}
                    </h1>
                    <p className=" text-richblack-900 font-mono "><span className="text-lg">With:</span> {truncateText(post.about, 25)}</p>
                    <p className=" text-richblack-900 font-mono "><span className="text-lg">Date:</span> {formattedDate}</p>
                    <div className='flex flex-row gap-7 pb-5'>                                         {/* here we passed "Learn More" as a children in CTAButton component and here compnent is used because there are many button like this; */}
                        <CTAButton active={true} postDet={post} linkto={`/pageDetails/${post._id}`}>  Know More </CTAButton>          {/* here active is passed as props because if active is true then button is yellow otherwise black; */}
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Card;

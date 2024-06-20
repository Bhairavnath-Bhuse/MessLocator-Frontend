import Review from "./Review";
const PageDetailsSecI = (props) =>{

    const { post } = props;
    // console.log("Post Details from PageDetailsSecI",post)

    const dateStr = post.date;
    const date = new Date(dateStr);

    // Get the day of the week
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    // Format the date part
    const datePart = date.toISOString().split('T')[0];

    // Combine the date and day of the week
    const formattedDate = `${datePart}, ${dayOfWeek}`;

    


    return(
        <div>

            {/* Wrapper */}
            <div className=" w-11/12 ">

                
                
                {/* Upper Box */}
                <div className="flex sm:flex-row flex-col justify-center">
                    {/* left Side */}
                    <div className="ml-5 w-[500px] sm:mr-4  mb-4">
                        {/* Owner Info */}
                        <div className="flex  m-5 w-5/12 gap-x-2 ">
                            

                            {post.owner_photo ? (
                            <img 
                                src={post.owner_photo} 
                                alt={post.title} 
                                className="rounded-full h-[40px] w-[40px]   " 
                               
                            />) : (    
                            <img 
                                src="https://www.pngitem.com/pimgs/m/521-5211656_cute-cartoon-characters-boy-hd-png-download.png"
                                className="h-[40px] w-[40px] rounded-full" 
                            />
                            
                            )}




                            <p className="mt-2 text-lg font-mono">{post.owner_name ? post.owner_name : 'Anonymous'}</p>

                            <hr className="border-t-2 border-gray-300 my-4" />
                        </div>
                        {post.thumbnailImage ? (
                            <img 
                                src={post.thumbnailImage} 
                                alt={post.title} 
                                className="rounded-xl h-[250px] w-[400px]   " 
                                // width="400" 
                                // height="200" 
                            />
                        ) : (
                            <img
                                className="rounded-xl h-[250px] w-[350px] "
                                src="https://i.imgur.com/QYWAcXk.jpeg"
                                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                width="300" 
                                height="200"
                                
                            />
                        )}

                        <div className="flex mt-3 mb-3 sm:gap-x-7 ">
                            {/* More Info */}
                                <div className="flex flex-col gap-3 ">
                                    <h2><span className="text-xl font-bold font-mono ">Bhaji :</span> {post.bhaji.toUpperCase()}</h2>
                                    <p><span className="text-xl font-bold font-mono ">With :</span> {post.about}</p>
                                    <p><span className="text-xl font-bold font-mono ">Price :</span> {post.price}</p>
                                    <p><span className="text-xl font-bold font-mono ">Date :</span> {formattedDate}</p>
                                    <p><span className="text-xl font-bold font-mono ">City :</span> {post.location}</p>
                                    <p><span className="text-xl font-bold font-mono ">Area in {post.location} :</span> {post.area}</p>
                                    <p><span className="text-xl font-bold font-mono ">About :</span> {post.description}</p>
                                </div>

                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col ">
                        
                    <Review post={post}/>
                    </div>

                </div>

                
               

            </div>
        </div>
    )

}

export default PageDetailsSecI;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import CTAButton from "../components/core/home/Button";
import ExploreMore from "../components/core/home/ExploreMore";
import AllPost from "../components/core/category/AllPost";
import { AppContext } from "../Context/AppContext";
import CategoryPost from "../components/core/category/CategoryPost";

const Home = () => {
    const { category, setCategory } = useContext(AppContext);

    console.log("Printing category value", category);

    return (
        <div>
            {/* Section Div */}
            <div className="bg-richblack-900 w-screen text-white">
                <div className="relative mx-auto w-11/12 pt-5 flex flex-col items-center justify-between gap-8 ">
                    <div className="mx-auto font-bold text-3xl">
                        <p>Enrich Your Food Diet With MessFinder</p>
                    </div>

                    <div className="text-center text-lg font-bold text-richblack-200">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Debitis optio expedita ipsam nulla corrupti rem laborum, 
                        necessitatibus obcaecati quidem reiciendis?</p>
                    </div>

                    <div className='flex flex-row gap-7 pb-5 mt-8'>                                         
                        <CTAButton active={true} linkto={"/about"}>Learn More</CTAButton>          
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div> 
                <ExploreMore/>
            </div>

            <div>
                {category === "All" ? <AllPost/> : <CategoryPost category = {category}/>}
            </div>
        </div>
    );
}

export default Home;

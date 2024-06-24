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
                <div className="relative mx-auto w-10/12 pt-5 flex flex-col items-center justify-between gap-6 ">
                    <div className="mx-auto font-bold ">
                        <p className="text-2xl">Enrich Your Food Diet With Mess Locator</p>
                    </div>

                    <div className="text-center w-11/12 text-lg font-bold text-richblack-200">
                        <p>A Nutritious diet can improve mood, reduce stress, and enhance
                             cognitive function, contributing to better mMntal Health.
                             Curate a diverse selection of Messes offering high-quality, 
                             Nutritious Meals to cater to different dietary preferences and needs.</p>
                    </div>

                    <div className='flex flex-row gap-7 pb-5 md:mt-6'>                                         
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

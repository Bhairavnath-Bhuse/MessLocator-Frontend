import React from "react"
// import Footer from "../components/common/Footer"
import ContactDetails from "../components/core/ContactPage/ContactDetails"
import ContactForm from "../components/core/ContactPage/ContactForm"
// import ReviewSlider from "../components/common/ReviewSlider"


const Contact = () => {
  return (

    <div className=" bg-richblack-900 ">
      
        <div className="mx-auto flex pt-20 pb-6 w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
          <div className="lg:w-[40%]">  <ContactDetails />  </div>                 {/* Contact Details */}
          <div className="lg:w-[60%]">  <ContactForm /> </div>                      {/* Contact Form */}
        </div>

        

        {/* <Footer/> */}

    </div>
  
)}


export default Contact
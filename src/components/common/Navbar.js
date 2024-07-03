// import { useState } from "react"
// import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation, useNavigate} from "react-router-dom";
import { useState } from "react";

import unknown from "../../assests/unknow_man.png"
import ConfirmationModal from "./ConfirmationModal";

import logo from "../../assests/logoFinal.png"


import { NavbarLinks } from "../../data/navbar-links"
// import { apiConnector } from "../../services/operations/apiconnector"


// import {ACCOUNT_TYPE } from "../../data/constants"
import ProfileDropdown from "../../components/core/Auth/ProfileDropDown"



function Navbar() {

  const { token } = useSelector((state) => state.auth)                    //fetch token from auth reducer using useSelector hook;
  // const { user } = useSelector((state) => state.profile)
//   const { totalItems } = useSelector((state) => state.cart)
const [confirmationModal, setConfirmationModal] = useState(null)               // to keep track of confirmation modal



  const location = useLocation()                                               // location is used for location.pathname;                                                       
  const navigate = useNavigate()
//   const [subLinks, setSubLinks] = useState([])
  // const [loading, setLoading] = useState(false)

  function matchRoute(route){                                   // if route is matched with (current route) then return true and color of text turn yellow otherwise white;
    return matchPath({ path: route } , location.pathname)
  }


  return (

    <div className = {`flex h-16 md:h-14 t items-center justify-center border-b-[1px] border-b-richblack-700 bg-richblack-800 transition-all duration-200`} >
         
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        
        <Link to="/" className="hidden md:block "> <img src = {logo} alt="Logo" className="rounded-[0.4rem]" width = {160} height = {32} loading = "lazy"/> </Link>           {/* Logo */}

        <nav className="  md:block">                                                                    {/* Navigation links */}
          <ul className="flex gap-x-2 md:gap-x-6 text-richblack-25">

              { NavbarLinks.map((link, index) => (

                  <li key = {index}>
 
                              <Link to = {link?.path}>
                                <p className = {` ${matchRoute(link?.path)? "text-yellow-25" : "text-richblack-25"} `}> {link.title}  </p>
                              </Link>

                  </li>

                  ))
              }

          </ul>
        </nav>




        {/* Login / Signup / Dashboard */}

        <div className="items-center flex md:gap-x-4 md:flex">

        
                                                        {/* if token === null then user are not login so we show login icon and sign icon  */}

          { token === null && ( <Link to="/login"> 
                                    <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">  Log in </button>                  
                               </Link>
                              )
           }

          { token === null && ( <Link to="/signup">
                                   <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100"> Sign up </button>
                                </Link>
                               )
           }

           { token === null && ( 
            <button
            onClick={() =>
              setConfirmationModal({
                text1: "You are not Logged In",
                text2: "You have to Log In / Sign Up to view Dashboard",
                btn1Text: "Sign Up",
                btn2Text: "Log In",
                btn1Handler: () => {
                  
                  navigate("/signup");
                  setConfirmationModal(null);
                  
                },
                btn2Handler: () => {
                  navigate("/login");
                  setConfirmationModal(null);
                },
              })
            }
            >
            <img src={unknown} alt = "unknown" className="rounded-full text-white h-[33px] w-[33px]  "></img>
            

            </button>
                               )
           }
           {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}

          { token !== null && <ProfileDropdown />}                {/*added profile dropdown if token is not equal to null means user is present */}

        </div>

       
      </div>
    </div>
  
)}


export default Navbar
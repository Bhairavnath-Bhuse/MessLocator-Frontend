import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import useOnClickOutside from "../../../services/hooks/useOnClickOutside"
import { logout } from "../../../services/operations/authAPI"


export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))           //when other then profile in Navbar is clicked then doesm't open the dropdown
  if(!user) return null


  return (
    <button className="relative" onClick={() => setOpen(true)}>

        {/* DropDown Icon on NavBar */}
      <div className="flex items-center gap-x-1">
        <img src={user?.image} alt={`profile-${user?.firstName}`}  className="aspect-square w-[30px] rounded-full object-cover" />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>


        {/* Drop Down Slide */}
      {open && (
        <div onClick={(e) => e.stopPropagation()}  ref = {ref}  className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800" >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>  
          {/* add "/dashboard/my-profile" to link to */}

            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>

          </Link>
          <div onClick = {() => {dispatch(logout(navigate));  setOpen(false); }}  className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25" >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  

)}



// e.stopPropagation(): This method prevents the event from propagating (bubbling up) to parent elements. 
// In other words, it stops the click event from being triggered on any ancestor elements. This can be useful 
// when you want to handle an event exclusively at the current element without triggering the same event on its 
// parent elements.


// ref: This is a special attribute in React that allows you to get direct access to a 
// DOM element or a React element
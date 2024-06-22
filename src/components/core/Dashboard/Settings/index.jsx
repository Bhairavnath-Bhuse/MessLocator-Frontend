import ChangeProfilePicture from "./ChangeProfilePicture"
import EditProfile from "./EditProfile"


export default function Settings() {

  return (
    <>
      <h1 className="mb-14 text-3xl font-bold text-richblack-800"> Edit Profile </h1>
      <ChangeProfilePicture />            {/* Change Profile Picture */}
      <EditProfile />                     {/* Profile */}
      
    </>
  
)}
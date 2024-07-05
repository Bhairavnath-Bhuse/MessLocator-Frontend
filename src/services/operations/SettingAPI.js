import { toast } from "react-hot-toast"

import { setUser } from "../../Context/slices/profileSlice"
import { apiConnector } from "./apiconnector"
import { settingsEndpoints,postEndpoints } from "./api"
// import { logout } from "./authAPI"


const { UPDATE_DISPLAY_PICTURE_API, UPDATE_PROFILE_API, } = settingsEndpoints;
const {UPDATE_FOOD_POST, DELETE_FOOD_POST, CREATE_FOOD_POST, } = postEndpoints;
 

export function updateDisplayPicture(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_DISPLAY_PICTURE_API,
                      formData,
                      {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                      }
                    )
      console.log("UPDATE_DISPLAY_PICTURE_API API RESPONSE............",  response )
         
      if(!response.data.success){
        throw new Error(response.data.message)
        }
      toast.success("Display Picture Updated Successfully")
      dispatch(setUser(response.data.data))
    }
     catch(error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
      toast.error("Could Not Update Display Picture")
    }
    toast.dismiss(toastId)
  }
}


export function updateProfile(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, { Authorization: `Bearer ${token}`, })
      // console.log("UPDATE_PROFILE_API API RESPONSE............", response)

      if(!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.updatedUserDetails.image ? response.data.updatedUserDetails.image : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
    
      dispatch(
        setUser({ ...response.data.updatedUserDetails, image: userImage })
      )
      toast.success("Profile Updated Successfully")
    } 
    catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Profile")
    }
    toast.dismiss(toastId)
  }
} 



export function editPostDetails(token, formData) {
  return async () => {
    const toastId = toast.loading("Loading...")
    console.log("Value of Token is ",token)
    try {
      const response = await apiConnector("PUT", UPDATE_FOOD_POST,
                      formData,
                      {
                        // "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                      }
                    )
      console.log("UPDATE_FOOD_POST API RESPONSE............",  response )
         
      if(!response.data.success){
        throw new Error(response.data.message)
        }
      toast.success("Food Post Updated Successfully")
      // dispatch(setUser(...response.data.data))
    }
     catch(error) {
      console.log("UPDATE_FOOD_POST API ERROR............", error)
      toast.error("Could Not Update  Post Details")
    }

    toast.dismiss(toastId)   
  }
}


export function addPost(token, formData) {
  return async () => {
    const toastId = toast.loading("Loading...")
    // console.log("Value of Token is ",token)
    try {
      const response = await apiConnector("POST", CREATE_FOOD_POST,
                      formData,
                      {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                      }
                    )
      console.log("CREATE_FOOD_POST API RESPONSE............",  response )
         
      if(!response.data.success){
        throw new Error(response.data.message)
        }
      toast.success("Food Post Added Successfully")
    }
     catch(error) {
      console.log("CREATE_FOOD_POST API ERROR............", error)
      toast.error("Could Not Add  Post Details")
    }

    toast.dismiss(toastId)

   
  }
}

export function deletePost(token, foodId) {
  return async () => {
    const toastId = toast.loading("Loading...");
    // console.log("Value of Token in delete post is ", token, " and value of food id is ", foodId);
    // console.log("Value of api response in delete post is ", `${DELETE_FOOD_POST}?foodId=${foodId}`);

    try {
      const response = await apiConnector('DELETE', `${DELETE_FOOD_POST}?foodId=${foodId}`,
      null,
        {
        Authorization: `Bearer ${token}`,
      });
      // console.log("DELETE_POST API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Food Post Deleted Successfully");
    } catch (error) {
      console.log("DELETE API ERROR............", error);
      toast.error("Could Not Delete Post");
    }

    toast.dismiss(toastId);
  };
}



// export function allFoodPost() {
//   return async () => {
//     const toastId = toast.loading("Loading...")
//     try {
//         // console.log("Printing url")
        
//         const response = await apiConnector("GET", postEndpoints.ALL_FOOD_POST);
        
        
//         if (response.status === 200) {
//             setPosts(response.data.data); // Assuming your data is in response.data.data
//         } else {
//             console.error(`Failed to fetch data. Status: ${response.status}`);
//             toast.error('Unable to fetch the post, please try later', {
//                 // position: toast.POSITION.TOP_RIGHT,
//             });
//         }
//     } catch (err) {
//         console.log("Error while fetching the data:", err);
//         toast.error('Unable to fetch the post, please try later', {
//             // position: toast.POSITION.TOP_RIGHT,
//         });
//     }
//     toast.dismiss(toastId)
   
//   }
// }






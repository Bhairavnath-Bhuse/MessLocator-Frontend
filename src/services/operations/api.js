const BASE_URL = process.env.REACT_APP_BASE_URL
// process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  }


//   Profile Endpoints
export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
    // GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
    // GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
    GET_OWNER_POST_LIST: BASE_URL + "/profile/ownerFoodPost"
  }

// Post ENDPOINTS
export const postEndpoints = {
    CREATE_FOOD_POST : BASE_URL + "/mess/createFoodPost",
    ALL_FOOD_POST : BASE_URL + "/mess/getAllFoodPost",
    UPDATE_FOOD_POST : BASE_URL + "/mess/updateFoodPost",
    DELETE_FOOD_POST   : BASE_URL + "/mess/deletePost",
    GET_FOOD_POST : BASE_URL + "/mess/getFoodPost"
  }


  // RATINGS AND REVIEWS
export const ratingsEndpoints = {
    GET_REVIEWS: BASE_URL + "/mess/getReviews",
    CREATE_REVIEWS: BASE_URL + "/mess/createRating"
  }


//   // CATAGORIES API
// export const categories = {
//     CATEGORIES_API: BASE_URL + "/mess/foodCategory",
//   }

// CATALOG PAGE DATA
export const catalogData = {
    CATALOGPAGEDATA_API: BASE_URL + "/mess/foodCategory",
  }


// CONTACT-US API
export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/reach/contact",
  }

  export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  }
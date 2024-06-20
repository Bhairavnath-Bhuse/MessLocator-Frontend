import {combineReducers} from "@reduxjs/toolkit";

import authSlice from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
// import courseReducer from "../slices/courseSlice"
// import viewCourseReducer from "../slices/viewCourseSlice"



const rootReducer  = combineReducers({                  // combining all reducer;
    auth: authSlice,
    profile:profileReducer,
    // cart:cartReducer,
    // course:courseReducer,
    // viewCourse:viewCourseReducer,
})

export default rootReducer
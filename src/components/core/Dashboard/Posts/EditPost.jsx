import EditPostDetails from "./EditPostDetails"
import { useParams } from "react-router-dom";
const Editpost = () =>{

    const { postId } = useParams();
    console.log("Value of Post in EditPost is ",postId)
    return(
    <>
      <h1 className="mb-14 text-3xl font-bold text-richblack-800"> Edit Post </h1>
      
      <EditPostDetails foodId={postId}/>
      
    </>
    )
    
}

export default Editpost;
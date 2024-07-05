import { PiWarningCircleFill } from "react-icons/pi";
import "../../core/category/style.css"
const Warning = () =>{
   return(
    <div>
        <div className=" flex md:flex-row gap-2  mt-4 ml-4">
            <div className="mt-2 text-xl"><PiWarningCircleFill /> </div>
            
            <span  className=" box-shadow  text-black border p-1 font-mono rounded-[1rem]">   Please LogIn to Post the Food Item or Add Comments</span>
        </div>
    </div>
   )
}

export default Warning;
import loginImg from "../assests/login.webp"
import Template from "../components/core/Auth/Template"

function Login({setIsLoggedIn}){
  return (

    <Template title="Welcome Back"  description1="Build yourself for today, tomorrow, and beyond." description2="Best Food is future-proof your Healthy Life."   image = {loginImg} formtype = "login"/>

  )}

export default Login
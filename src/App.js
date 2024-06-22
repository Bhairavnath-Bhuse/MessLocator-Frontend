import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home"
// import Catalog from './components/core/home/Catlog';
import PageDetails from './components/core/category/PageDetails';
import Navbar from './components/common/Navbar';
import Settings from './components/core/Dashboard/Settings';
import MyPosts from './components/core/Dashboard/Posts/MyPosts';
import Editpost from './components/core/Dashboard/Posts/EditPost';



// Pages
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/core/Dashboard/MyProfile';





function App() {

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { user } = useSelector((state) => state.profile)

  // useEffect(() => {                                                    // it store data of user in localstroage and when we open browser then that user logined;                 
  //   if(localStorage.getItem("token")){
  //     const token = JSON.parse(localStorage.getItem("token"))
  //     dispatch(getUserDetails(token, navigate))
  //   }
  // }, [])




  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element = {<Home/>}> </Route>
        <Route path="/pageDetails/:postId" element={<PageDetails/>} />
        <Route path="signup" element = {<Signup/>} />
        <Route path = "login" element = {<Login/>} />
        <Route path="/verify-email" element = {<VerifyEmail/>} />
        <Route path='contact' element = {<Contact/>} />
        <Route path="/forgot-password" element = {<ForgotPassword/>} />
        
        <Route  element = {<Dashboard/>} >
        
          <Route path="dashboard/my-profile" element={ < MyProfile />} /> 
          <Route path="dashboard/Settings" element={<Settings />} /> 
          <Route path="dashboard/my-posts" element={<MyPosts/>} />
          <Route path="/pageDetails/:postId/dashboard/edit-post/:foodId" element={<Editpost/>} />
        
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;

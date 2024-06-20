import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home"
// import Catalog from './components/core/home/Catlog';
import PageDetails from './components/core/category/PageDetails';
import Navbar from './components/common/Navbar';


// Pages
import Signup from './pages/Signup';
import Login from './pages/Login';






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
        
      </Routes>
    </div>
  );
}

export default App;

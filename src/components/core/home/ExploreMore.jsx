import { useState,Fragment } from "react";
import { AppContext } from "../../../Context/AppContext";
import "../../../pages/style.css"
import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import AllPost from "../category/AllPost";

const ExploreMore = () => {
  // const context = useContext(AppContext);

  const [active, setActive] = useState("1");
  const { setCategory } = useContext(AppContext);

  const handleClick = (event) => {
    const value = event.target.value;
    setActive(event.target.id);
    setCategory(value) 
  }

    return (
      <Fragment>
 <div className="text-richblack-800 bg-richblack-50 md:h-[65px] h-auto font-[600] text-lg flex-wrap rounded-[0.7rem] pl-8 pr-8 flex mt-5 mx-auto w-full md:w-[50%] items-center justify-around">
  <button
    key={1}
    className={`${active === "1" ? "active" : undefined} bt1 p-2`}
    id={"1"}
    name="All"
    value="All"
    onClick={handleClick}
  >
    All
  </button>

  <button
    key={2}
    className={`bt2 ${active === "2" ? "active" : undefined} p-2`}
    id={"2"}
    name="Pimpri-Chinchwad"
    value="Pimpri-Chinchwad"
    onClick={handleClick}
  >
    Pimpri-Chinchwad
  </button>

  <button
    key={3}
    className={`bt3 ${active === "3" ? "active" : undefined} p-2`}
    id={"3"}
    name="Pune"
    value="Pune"
    onClick={handleClick}
  >
    Pune
  </button>

  <button
    key={4}
    className={`bt4 ${active === "4" ? "active" : undefined} p-2`}
    id={"4"}
    name="Hinjewadi"
    value="Hinjewadi"
    onClick={handleClick}
  >
    Hinjewadi
  </button>
</div>

</Fragment>

    );
}

export default ExploreMore;
import { useState, Fragment } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useContext } from "react";
import "../../../pages/style.css"; // Assuming this contains additional styles you need

const ExploreMore = () => {
  const [active, setActive] = useState("1");
  const { setCategory } = useContext(AppContext);

  const handleClick = (event) => {
    const value = event.target.value;
    setActive(event.target.id);
    setCategory(value);
  };

  return (
    <Fragment>
      <div className="text-richblack-800 bg-richblack-50 h-auto md:h-[65px] font-[600] text-lg rounded-[0.7rem] flex flex-wrap justify-center md:justify-around mt-5 mx-auto w-full md:w-[50%] items-center">
        <button
          key={1}
          className={`${active === "1" ? "active" : undefined} bt1 p-2 m-1 md:m-0`}
          id={"1"}
          name="All"
          value="All"
          onClick={handleClick}
        >
          All
        </button>
        <button
          key={2}
          className={`bt2 ${active === "2" ? "active" : undefined} p-2 m-1 md:m-0`}
          id={"2"}
          name="Pimpri-Chinchwad"
          value="Pimpri-Chinchwad"
          onClick={handleClick}
        >
          Pimpri-Chinchwad
        </button>
        <button
          key={3}
          className={`bt3 ${active === "3" ? "active" : undefined} p-2 m-1 md:m-0`}
          id={"3"}
          name="Pune"
          value="Pune"
          onClick={handleClick}
        >
          Pune
        </button>
        <button
          key={4}
          className={`bt4 ${active === "4" ? "active" : undefined} p-2 m-1 md:m-0`}
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
};

export default ExploreMore;

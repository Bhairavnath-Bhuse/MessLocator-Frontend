import React from "react";

const Skeleton = () => {
  return (
    <div className=" p-4 m-auto mt-5 mb-5 shadow-2xl rounded-md w-[80%] md:w-4/12">
      <div className="relative h-60 mb-4 flex justify-center items-center bg-[#d1d5db] animate-pulse">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className=" flex flex-col mt-2 gap-y-4">
      <div className="h-5 bg-[#d1d5db] rounded-full mb-4"></div>
      <div className="h-5 bg-[#d1d5db] rounded-full mb-3"></div>
      <div className="h-5 bg-[#d1d5db] rounded-full mb-3"></div>
      </div>
     
    </div>
  );
};

export default Skeleton;
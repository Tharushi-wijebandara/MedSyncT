import React from "react";
import image from "../assets/images/logo.png";

const Dheader: React.FC = () => {
  return (
    <div>
      <div className="w-full flex items-center">
        <div className="flex flex-row container bg-background-color px-5 py-2">
          <div className="basis-1/4">
            <img
              className="flex items-center w-[130px]  rounded-xl"
              src={image}
              alt="logo"
            />
          </div>
          <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer justify-center items-center ">
            <div
              className="hover:bg-secondary-color text-white bg-primary-color rounded-2xl p-2"
              onClick={() => console.log("Home")}
            >
              Register
            </div>
            <div
              className="hover:bg-secondary-color text-white bg-primary-color rounded-2xl p-2"
              onClick={() => console.log("Docter Channel")}
            >
              Loging
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dheader;

import React from "react";
import image from "../assets/Images/Logo.png";

const Header: React.FC = () => {
  return (
    <div className="w-full flex items-center">
      <div className="flex flex-row container bg-background-color px-5 py-2">
        <div className="basis-1/4">
          <img
            className="flex items-center h-5/6 w-100 rounded-xl"
            src={image}
            alt="logo"
          />
        </div>
        <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer justify-center items-center gap-10">
          <div
            className="hover:underline hover:text-[#007E85]"
            onClick={() => console.log("Home")}
          >
            Home
          </div>
          <div
            className="hover:underline hover:text-[#007E85]"
            onClick={() => console.log("Docter Channel")}
          >
            Docter Channel
          </div>
          <div
            className="hover:underline hover:text-[#007E85]"
            onClick={() => console.log("About")}
          >
            About
          </div>
          <div
            className="hover:underline hover:text-[#007E85]"
            onClick={() => console.log("Contact Us")}
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

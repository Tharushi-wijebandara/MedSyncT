import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-row container bg-background-color px-3 py-5">
        <div className="basis-1/4">MedSync</div>
        <div className="basis-2/4 flex gap-5 font-semibold cursor-pointer ">
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

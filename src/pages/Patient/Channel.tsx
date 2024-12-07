import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChannelCard from "../../components/ChannelCard";



const Channel: React.FC = () => {
  
  return (
    <div>
      <Header />
      <div>
      <ChannelCard/>
      </div>
      <div>
      <p className="text-2xl px-3">📞
              <a href="tel:+94117990990" className="hover:underline text-red-500  hover:text-blue-900 ">
                 +94 999 999 99
              </a>{" "}
              for Agent Assistance
            </p>
      </div><br/>
      <Footer/>
    </div>
  );
};

export default Channel;

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import homeimage from "../../assets/Images/Home.png";

const Home: React.FC = () => {
  return (
    <div>
      <Header />

      <div className="w-full flex justify-end h-auto items-end">
        <div>
          <img src={homeimage} alt="doctor-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Cardiology from '../assets/Images/Cardiology.png'

const About:React.FC = () => {
  const data = [
    {
      
      title: "Angular",
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      imageUrl: ''
    },
    {
     
      title: "HTML for Beginners",
      description:
        'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      imageUrl: "../assets/Images/eye.png",
    },
    {
      
      title: "new test course",
      description: "lorem description",
      imageUrl: "../assets/Images/dental.png",
    },
     {
      
      title: "new test course",
      description: "lorem description",
      imageUrl: "../assets/Images/dental.png",
    },
  ];
  return (
    <>
    <div>
      <Header/>
      <div className="w-full flex justify-center">
        <div className=" container grid grid-cols-3 gap-5">
        <div className="bg-[#ECECEC] h-screen">
      
      <div className="w-full flex justify-center px-5 py-5 pb-5">
        <div className="container grid grid-cols-3 gap-5">
          {data.map((item, index) => (
            <Card title={item.title} description={item.description} image={item.imageUrl}/>
          ))}
        </div>
      </div>
    </div>
        </div>
      </div>
      
    </div>
    
    <Footer/>
    </>
    
  )
}

export default About

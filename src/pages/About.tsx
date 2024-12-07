import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const About:React.FC = () => {
  return (
    <div>
      <Header/>
      <div className="w-full flex justify-center">
        <div className=" container grid grid-cols-3 gap-5 p-5">
          <Card/><Card/><Card/><Card/>
        </div>
      </div>
      
    </div>
  )
}

export default About

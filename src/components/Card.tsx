import React from 'react'
// import image from '../assets/Images/Cardiology.png'

interface props {
  title:string;
  description:string;
  image:string;
}
const Card:React.FC<props> = ({title,description,image}: props) => {
  return (
    <div className="bg-white rounded-xl p-5" >
      <div>
        <img src={image} alt="card-image" className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-3 mt-3 pb-5">
        <div className="text-2xl text-[#007E85]">{title}</div>
        <div>{description}</div>
        <div className="flex items-center gap-3">
          <button className="text-lg text-[#007E85]">Learn more</button>
          
        </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import image from '../assets/Images/Cardiology.png'
const Card:React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-5" >
    <div>
      <img src={image} alt="card-image" className="rounded-xl" />
    </div>
    <div className="flex flex-col gap-3 mt-3 pb-5">
      <div className="text-2xl text-[#007E85]">Cardiology</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus in tenetur nemo quia placeat atque, quidem itaque culpa, consequatur error laboriosam unde natus dolores provident nam vero eius autem ab.</div>
      <div className="flex items-center gap-3">
        <button className="text-lg text-[#007E85]">Learn more</button>
        
      </div>
    </div>
  </div>
  )
}

export default Card

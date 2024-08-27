import React from 'react'
import {avatar} from "../../assets/images/avatarIcon.jpg"

const DoctorFeedback = () => {
  return (
  <>
  <div className="mb-[50px]">
<h4 className='text-[20px] leading-[30px] font-bold text-slate-900 mb-[30px]'>
  All Reviews (272)
</h4>
<div className="flex justify-between gap-10 mb-[30px]">
  <div className="flex gap-3">
    <figure className='w-10 h-10 rounded-full'>
      <img src={avatar} alt="" className="" />
    </figure>
  </div>
</div>
  </div>
  
  
  
  </>
  )
}

export default DoctorFeedback
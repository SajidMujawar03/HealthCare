import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import starIcon from "../../assets/images/starIcon.jpg"
const DoctorCard = ({doctor}) => {
    const {name,specialization,avgRating,totalRating,photo,totalPatients,hospital}=doctor
  return (
    <>
        <div className="p-3 flex items-center justify-center">
            <div className=''>
            <div>
                <img src={photo} className='w-[300px] h-[300px] rounded-[20px]' alt="" />
            </div>

            <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-slate-800 font-700 mt-3'>
                {name}
            </h2>

            <div className="mt-2 flex items-center justify-between">
                <span className="bg-[#CCF0F3] text-cyan-600 py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {specialization}
                </span>

                <div className="flex items-center gap-[6px]">
                    <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-slate-800'>
                        <img src={starIcon} alt="" className='w-[50px]'/>{avgRating}
                    </span>
                    <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-400 text-slate-600 '>({totalRating})</span>
                </div>
            </div>


            <div className="mt-[18px] lg:mt-5 flex items-center justify-between ">
                <div className="">
                    <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-slate-800 '>
                        +{totalPatients} patients
                    </h3>
                    <p className='txt-[1px]] leading-6 font-[400] text-slate-600'>At {hospital}</p>
                </div>

                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-indigo-800 hover:border-none">
              <BsArrowRight className='group-hover:text-white'></BsArrowRight>
              </Link>
            </div>
        </div>
        </div>
    </>
  )
}

export default DoctorCard
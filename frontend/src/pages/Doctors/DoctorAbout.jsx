import React from 'react'
import { formateDate } from '../../utils/formateDate'
const DoctorAbout = () => {
  return (
    <>
    <div>
<h3 className="text-[20px] leading-[30px] text-slate-900 font-semibold flex items-center gap-2">About of 
<span className="text-cyan-600 font-bold text-[24px] leading-9 ">Muhibur Rehman</span></h3>

<p className="text_para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis beatae iste aperiam reprehenderit id recusandae quasi. Placeat eius hic optio, fugit quas nemo quae quia saepe quisquam. Sint corporis in dignissimos molestias mollitia cum quibusdam, harum unde ullam quod a ducimus? Quibusdam rem omnis eligendi alias minima autem accusantium molestias?</p>
    </div>

    <div className="mt-12">
<h3 className="text-[20px] leading-[30px] text-slate-900 font-semibold">
  Education
</h3>

<ul className='pt-4 md:p-5'>
  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
    <div className=''>
        <span className="text-cyan-600 text-[15px] leading-6 font-semibold">
          {formateDate('12-04-2021')} - {formateDate('10-31-2024')}
        </span>
        <p className="text-[16px] leading-6 font-medium text-slate-600">
          PHD in Surgeon
        </p>
    </div>
    <p className="text-[14px] leading-5 font-medium text-slate-600">
          New Apollo Hospital, Baramati
        </p>
  </li>
  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
    <div className=''>
        <span className="text-cyan-600 text-[15px] leading-6 font-semibold">
          {formateDate('04-23-2024')}
        </span>
        <p className="text-[16px] leading-6 font-medium text-slate-600">
          PHD in Surgeon
        </p>
    </div>
    <p className="text-[14px] leading-5 font-medium text-slate-600">
          New Apollo Hospital, Baramati
        </p>
  </li>
  
</ul>

    </div>
    

    <div className="mt-12">
    <h3 className="text-[20px] leading-[30px] text-slate-900 font-semibold">
  Experience
</h3>

<ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
  <li className="p-4 rounded bg-[#fff9ea]">
    <span className="text-yellow-400 text-[15px] leading-6 font-semibold">
    {formateDate('04-23-2024')}
    </span>
    <p className="text-[16px] leading-6 font-medium text-slate-600">
          Sr. Surgeon
        </p>
        <p className="text-[14px] leading-5 font-medium text-slate-600">
          New Apollo Hospital, Baramati
        </p>

  </li>
  <li className="p-4 rounded bg-[#fff9ea]">
    <span className="text-yellow-400 text-[15px] leading-6 font-semibold">
    {formateDate('04-23-2024')}
    </span>
    <p className="text-[16px] leading-6 font-medium text-slate-600">
          Sr. Surgeon
        </p>
        <p className="text-[14px] leading-5 font-medium text-slate-600">
          New Apollo Hospital, Baramati
        </p>

  </li>
</ul>


    </div>
    
    </>
  )
}

export default DoctorAbout
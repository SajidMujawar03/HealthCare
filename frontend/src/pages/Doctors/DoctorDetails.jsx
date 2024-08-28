import React, { useState } from 'react'
import doctorImg from "../../assets/images/doctor-img01.jpg"
import starIcon from "../../assets/images/starIcon.jpg"
import DoctorAbout from './DoctorAbout';
import DoctorFeedback from './DoctorFeedback';
import SidePanel from './SidePanel';


const DoctorDetails = () => {

  const [tab,setTab]=useState('');
  return (
   <>
   <section>

    <div className="max-w-[1170px] px-5 mx-auto">
      <div className="grid md:grid-cols-3 gap-[50px] ">
        <div className="md:col-span-2 ">
          <div className="flex items-center gap-5 ">
            <figure className='max-w-[200px] max-h-[200px] '>
              <img src={doctorImg} alt="" className='w-full '/>
            </figure>

            <div>

            <span className="bg-[#CCF0F3] text-cyan-500 py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
              Surgeon</span>
              <h3 className='text-slate-900 text-[22px] leading-9 mt-3 font-bold'>
                Muhibur Rehman
              </h3>
              <div className="flex items-center gap-[6px] ">
                <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-slate-900 '>
                <img src={starIcon} alt="" className='w-8'/> 4.8
                </span>

                <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-slate-600">(270)</span>
              </div>

              <p className='text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus similique doloremque quam obcaecati, aspernatur excepturi.</p>
            </div>
          </div>

        <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
          <button className={`${tab==='about' && 'border-b border-solid border-blue-800 '}py-2 px-5 mr-5 text-[16px] leading-7 text-slate-900 font-semibold `} onClick={()=>setTab('about')}>About</button>
          <button className={`${tab==='feedback' && 'border-b border-solid border-blue-800 '}py-2 px-5 mr-5 text-[16px] leading-7 text-slate-900 font-semibold `} onClick={()=>setTab('feedback')}>Feedback</button>
        </div>
        
        <div>
        {
          tab==='about'&& <DoctorAbout/>
        }

        {
          tab==='feedback'&& <DoctorFeedback/>
        }


        </div>
        </div>
        

        <div>
          <SidePanel/>
        </div>
      </div>

    </div>
   </section>
   </>
  )
}

export default DoctorDetails
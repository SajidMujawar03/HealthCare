import React from 'react'

const SidePanel = () => {
  return (
   <>
   <div className="shadow-[0_10px_50px_rgba(0,0,0,_0.1)] p-3 lg:p-5 rounded-md ">
    <div className='flex items-center justify-between'>
      <p className='text_para mt-0 font-semibold'>Ticket Price</p>
      <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-slate-900 font-bold'>
        500 Rs/-
      </span>
    </div>

    <div className="mt-[30px]">
      <p className="text_para mt-0 font-semibold text-slate-900 ">
        Available Time Slots:
      </p>

      <ul className="mt-3">
        <li className="flex items-center justify-between mb-2">
          <p className="text-[15px] leading-6 text-slate-700 font-semibold">
            Sunday
          </p>
          <p className="text-[15px] leading-6 text-slate-700 font-semibold">
            4:00 PM to 9:30 PM
          </p>
        </li>

        <li className="flex items-center justify-between mb-2">
          <p className="text-[15px] leading-6 text-slate-700 font-semibold">
            Tuesday
          </p>
          <p className="text-[15px] leading-6 text-slate-700 font-semibold">
            4:00 PM to 9:30 PM
          </p>
        </li>

        <li className="flex items-center justify-between mb-2">
          <p className="text-[15px] leading-6 text-slate-700 font-semibold">
           Wednesday
          </p>
          <p className="text-[15px] leading-6 text-slate-700 font-semibold">
            4:00 PM to 9:30 PM
          </p>
        </li>
      </ul>
    </div>

    <button className='btn px-2 w-full rounded-md'>Book Apointment</button>
   </div>
   
   
   </>
  )
}

export default SidePanel
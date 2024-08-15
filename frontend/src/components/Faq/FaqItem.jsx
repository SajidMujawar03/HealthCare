import React from 'react'

const FaqItem = ({faq}) => {
  return (
    <>
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
        <div className="flex items-center justify-between gap-5">
            <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-slate-900">
                {faq.question }
               
            </h4>
            <div className={`w-7 `}></div>
        </div>
    </div>
    
    </>
  )
}

export default FaqItem;
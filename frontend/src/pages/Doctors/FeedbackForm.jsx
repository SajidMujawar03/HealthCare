import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
const FeedbackForm = () => {

    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);
    const [reviewMessage,setReviesMessage]=useState('')

    const handleSubmitReview=async e=>{
            e.preventDefault();
    }
  return (
    <>
    
    <form action="">
    <h3 className="text-slate-900 text-[16px] leading-6 font-semibold mb-4 mt-0">How would you rate the overall experience?</h3>

    <div>
        {[...Array(5).keys()].map((_,index)=>{
                index+=1;
                return(
                    <button 
                    key={index}
                    type="button"
                    className={`${index<=((rating && hover) || hover)?"text-yellow-500":"text-slate-500"}
                    bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                    onClick={()=>{setRating(index)}}
                    onMouseEnter={()=>{setHover(index)}}
                    onMouseLeave={()=>{setHover(rating)}}
                    onDoubleClick={()=>{setHover(0);setRating(0)}}
                    ><AiFillStar/></button>
                )

})
        }
    </div>

    <div className="mt-[30px]">
    <h3 className="text-slate-900 text-[16px] leading-6 font-semibold mb-4 mt-0">Share your feedback or suggestions*</h3>
    <textarea 
    value={reviewMessage}
    rows="5"
    placeholder='write your message'
    onChange={e=>setReviesMessage(e.target.value)}
    className='border border-solid border-[#0066ff34] focus:outline outline-blue-700 w-full px-5 py-3 rounded-md'
    >
    
    

    </textarea>


    </div>
    <button type="submit" onClick={handleSubmitReview} className='btn'>Submit Review</button>


    </form>
    
    
    </>
  )
}

export default FeedbackForm
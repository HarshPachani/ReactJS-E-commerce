import React from 'react'
import img from '../check.png';
function Modal({message}) {
  return (
    <div className='flex justify-center align-baseline sticky top-0 z-50'>
      <div className='ml-20 mr-20 p-3 border-b-4 border-[#9f2089] rounded bg-white text-black font-bold flex justify-center items-center'>
          {message } <img src={img} alt="" style={{width: '20px', marginLeft: '5px'}}/>
      </div>
    </div>
  )
}

export default Modal
import React from 'react'
import img from '../check.png';
function Modal() {
  return (
    <div className='mb-2 ml-20 mr-20 p-3 bg-[#9f2089] text-white font-bold rounded-md sticky top-0 flex justify-center items-center'>
        Item added to Cart! <img src={img} alt="" style={{width: '20px', marginLeft: '5px'}}/>
    </div>
  )
}

export default Modal
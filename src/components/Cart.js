import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../features/cartSlice';

function Cart({id, image, title, price}) {
    
    const dispatch = useDispatch();

  return (
    <div className='w-full flex justify-center items-center m-6 p-7'>
        {/* <img src={image} alt={title} className='flex justify-center items-center h-6'/> */}
        <img src={image} alt={title} style={{width: '50px'}}/>
        <h3>{title}</h3>
        <h3>{price}</h3>
        <button onClick = {() => dispatch(remove(id))} className='p-2 bg-[#9f2089] text-white rounded-md m-4'>Remove</button>
    </div>
  )
}

export default Cart
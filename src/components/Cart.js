import React from 'react'
import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem } from '../features/cartSlice';
import { closeModal, openModal } from '../features/modalSlice';

function Cart({id, image, title, price, amount}) {
    
    const dispatch = useDispatch();

    const handleRemove = (id) => {
      dispatch(removeItem(id))
      dispatch(openModal("Item removed from Cart!"));
      setTimeout(() => {
        dispatch(closeModal());
      }, 3000);
    }

  return (
    // <div className='w-full flex justify-center items-center m-6 p-7'>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}} className='w-full font-bold m-5 p-5 rounded-md'>
    {/* <img src={image} alt={title} className='flex justify-center items-center h-6'/> */}
      <div>
        <img src={image} alt={title} style={{width: '50px'}} className='w-full'/>
      </div>
      <div className='flex flex-col'>
        <h3 className='max-w-md'>{title}</h3>
        <h3 className='text-center'>Price:  $ {price}</h3>
      </div>
      <div>
        Amount: 
        <div>
          <button className='bg-[#9f2089] rounded-full text-white m-3 p-2' onClick={() => dispatch(increase(id))}>+</button>
          <span>{amount}</span>
          <button className='bg-[#9f2089] rounded-full text-white m-3 p-2' onClick={() => {
            if(amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id))
            }}>-</button>
        </div>
      </div>
      <button onClick = {() => handleRemove(id)} className='p-2 bg-[#9f2089] text-white rounded-md m-4'>Remove</button>
    </div>
  )
}

export default Cart
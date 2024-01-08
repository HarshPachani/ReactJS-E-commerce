import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <>
      <div className='object-contain w-full font-bold m-5 p-5 rounded-md md:flex md:justify-around md:items-center border-2 border-gray-600'>
        <div className='m-2 p-2 w-40'>
          <img src={image} alt={title} className='w-full'/>
        </div>
        {/* <div className='mt-12'> */}
          <div className='flex flex-col'>
            <h3 className='text-center w-fit'>{title}</h3>
            <h3 className='mt-5 mb-5'>Price:  $ {price}</h3>
          </div>
          <div className='flex items-center mt-2 mb-2 md:flex md:flex-col'>
            <div>Amount: </div> 
            <div className='flex flex-row items-center text-center ml-8 md:flex-col'>
              <button className='bg-[#9f2089] rounded-full text-white m-3 p-2 w-fit' onClick={() => dispatch(increase(id))}>+</button>
              <span className='flex items-center justify-center'>{amount}</span>
              <button className='bg-[#9f2089] rounded-full text-white m-3 p-2 w-fit' onClick={() => {
                if(amount === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease(id))
                }}>-</button>
            </div>
          </div>
          <div className='flex sm:flex-col'>
            <Link to={`/ReactJS-E-commerce/product/${id}`} className='p-2 bg-[#9f2089] text-white rounded-md  hover:bg-pink-500 mr-4 mt-4 mb-4'>Details</Link>
            <button onClick = {() => handleRemove(id)} className='p-2 bg-[#9f2089] text-white rounded-md mt-4 mb-4'>Remove</button>
          </div>
      </div>
    </>
  )
}

export default Cart
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../features/cartSlice.js';
import { closeModal, openModal } from '../features/modalSlice.js';

function Product({id, image, title, price}) {
  const [productTitle, setProductTitle] = useState(title.slice(0, 25));
  const dispatch = useDispatch();
  const handleCart = ({id, image, title, price}) => {
    dispatch(add({id, image, title, price}));
    dispatch(openModal());

    setTimeout(() => {
        dispatch(closeModal());
    }, 3000);
  }
  return (
    <div className='bg-white p-7 m-10 w-48 text-center rounded-md font-bold'>
        <img src={image} alt={title} className = "mb-6 flex justify-center items-center pt-12"/>
        <h4>{productTitle}<span onClick={() => setProductTitle(title)} className='hover: cursor-pointer'> ...</span></h4>
        <h4 className='m-3'>${price}</h4>
        <div className="flex flex-col relative align-bottom">
          <button className='p-2 bg-[#9f2089] text-white rounded-md mt-4 w-full hover:bg-pink-500'>Details</button>
          <button onClick={() => handleCart({id, image, title, price})} className='p-2 bg-[#9f2089] text-white rounded-md mt-4 w-full hover:bg-pink-500'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product
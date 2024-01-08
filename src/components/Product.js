import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increase } from '../features/cartSlice.js';
import { closeModal, openModal } from '../features/modalSlice.js';
import { Link } from 'react-router-dom';

function Product({id, image, title, price}) {
  const [productTitle, setProductTitle] = useState(title.slice(0, 25));

  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const alert = () => {
    dispatch(openModal("Item added to Cart!"));
    
    setTimeout(() => {
      dispatch(closeModal());
    }, 3000);
  }

  const handleCart = ({id, image, title, price}) =>{
    if(cartItems.length === 0) {
      const amount = 1;
      dispatch(addCart({id, image, title, price, amount}));
      return alert();
    }
    const isExists = cartItems.find((item) => item.id === id);
    if(isExists) {
      dispatch(increase(isExists.id));
      return alert();
    }
    const amount = 1;
    dispatch(addCart({id, image, title, price, amount}));
    return alert();
  }

  return (
    <div className='bg-white p-7 m-10 w-48 text-center rounded-md font-bold relative'>
      <img src={image} alt={title} className = "mb-6 flex justify-center items-center pt-12"/>
      <h4>{productTitle}<span onClick={() => setProductTitle(title)} className='hover: cursor-pointer'> ...</span></h4>
      <h4 className='m-3'>${price}</h4>
      <div className="flex flex-col place-items-end inset-x-0 bottom-0 border-b-2">
        <Link to={`/ReactJS-E-commerce/product/${id}`} className='p-2 bg-[#9f2089] text-white rounded-md mt-4 w-full hover:bg-pink-500'>Details</Link>
        <button onClick={() => handleCart({id, image, title, price})} className='p-2 bg-[#9f2089] text-white rounded-md mt-4 w-full hover:bg-pink-500'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product;
import React from 'react'
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import { closeModal, openModal } from '../features/modalSlice';
import { Link } from 'react-router-dom';

function Carts() {
    const {cartItems, total} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleClear = () => {
      dispatch(clearCart());
      dispatch(openModal("Cart cleared successfully"));
      setTimeout(() => {
        dispatch(closeModal());
      }, 3000);
    }
    
    if(cartItems.length < 1) {
      return(
          <div className='text-2xl font-bold text-center m-20 text-[#9f2089]'>
            <h3>Your bag is currently empty</h3>
          </div>
      )
  }

  return (
    <>
    <div className='w-fit m-4 ml-9 flex justify-start'>
      <Link to="/ReactJS-E-commerce" className='p-2 bg-[#9f2089] text-white font-bold rounded-md m-8 w-full hover:bg-pink-500'> &lt; Home</Link>
    </div>
    <div className='bg-white p-7 rounded-md flex flex-col justify-around items-center w-full'>
        {
            cartItems.map((product) => {
                return <Cart key={product.id} {...product}/>
            })
        }
        <hr className='w-full h-1 bg-[#9f2089]'/>
      <div className='ml-10 mr-10 flex justify-between align-middle font-bold'>
        <span>Total</span>
        <span>: $ { total.toFixed(2)}</span>
      </div>
      <button onClick={() => handleClear()} className='w-fit p-2 pl-6 pr-6 font-bold flex justify-around items-center bg-[#9f2089] text-white rounded-md mt-4 hover:bg-pink-500'>Clear Cart</button>
    </div>
    </>
  )
}

export default Carts
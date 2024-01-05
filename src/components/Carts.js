import React from 'react'
import Cart from './Cart';
import { useSelector } from 'react-redux';

function Carts() {
    const cartItems = useSelector((state) => state.cart);

  return (
    <div className='bg-white p-7 m-10 rounded-md flex flex-col justify-around items-center w-full'>
        {
            cartItems.map((product) => {
                return <Cart key={product.id} {...product} />
            })
        }
    </div>
  )
}

export default Carts
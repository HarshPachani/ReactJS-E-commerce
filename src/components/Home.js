import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div className='bg-gray-100 p-20'>
        <h1 className='text-2xl font-bold m-2 flex justify-center'>Welcome to the E-comm store</h1>
        <div>
            <h2 className='text-2xl font-bold m-5' style={{color: '#9f2089'}}>Products</h2>
            <Products/>
        </div>
    </div>
  )
}

export default Home
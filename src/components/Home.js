import React from 'react'
import Products from './Products'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../features/categorySlice';
import Categories from './CategoriesButton';


function Home() {
  const {data: products} = useSelector((state) => state.product);
  const categories = ['all', ...new Set(products.map(product => product.category))];
  const dispatch = useDispatch();

  const filterItems = (category) => {
    if(category === 'all') {
      dispatch(setCategory('all'));
    }
    dispatch(setCategory(category));
  }

  return (
    <div className='bg-gray-100 p-10 md-p-20'>
        <h1 className='text-2xl font-bold m-2 flex justify-center text-center'>Welcome to the E-comm store</h1>
        <div>
            <div className='w-full'>
              <Categories categories={categories} filterItems={filterItems}/>
            </div>
            <h2 className='text-2xl font-bold m-5' style={{color: '#9f2089'}}>Products</h2>
            <Products/>
        </div>
    </div>
  )
}

export default Home
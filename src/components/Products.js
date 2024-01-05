import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/productSlice';
import Product from './Product';

function Products() {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state) => state.product);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

  return (
    <div className='grid grid-cols-3 gap-4'>
        {
            products.map((product) => {
                return <Product key={product.id} {...product}/>
            })
        }
    </div>
  )
}

export default Products
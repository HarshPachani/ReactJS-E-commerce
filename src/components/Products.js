import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/productSlice';
import Product from './Product';
import { setCategory } from '../features/categorySlice';

function Products() {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state) => state.product);
    const {type: category} = useSelector((state) => state.category);
    
    const [items, setItems] = useState([]);

    useEffect(()=>{
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        if(category === 'all') {
            dispatch(setCategory(category));
            const items = products;
            setItems(items);
        }
        else {
            dispatch(setCategory(category));
            const newItems = products.filter((product) => product.category === category);
            setItems(newItems);
        }
    }, [category, products]);

  return (
    <div className='flex justify-center text-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                items.map((product) => {
                    return <Product key={product.id} {...product}/>
                })
            } 
        </div>
    </div>
  )
}

export default Products
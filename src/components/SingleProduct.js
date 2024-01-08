import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchSingleProduct } from '../features/singleProductSlice';
import { increase, addCart } from '../features/cartSlice';
import { openModal, closeModal } from '../features/modalSlice';
import img from '../star.png';

function SingleProduct() {

    const { data:product } = useSelector((state) => state.singleProduct);
    const {cartItems} = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
      dispatch(fetchSingleProduct(id))
    }, [dispatch, id]);

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
    let exists = false;

  return (
    <div className='m-4'>
        <Link to="/ReactJS-E-commerce" className='p-2 bg-[#9f2089] text-white font-bold rounded-md m-8 w-full hover:bg-pink-500'> &lt; Back</Link>
        <div className='flex flex-col justify-center p-5 text-left m-16 mt-0'>
          <div className='flex justify-center align-baseline mb-5'>
            <img src={product.image} alt={product.title} className='mb-6 flex justify-center items-center pt-12 w-40'/>
          </div>
          <h2 className='font-bold'>{product.title}</h2>
          <h2 className='font-bold'>$ {product.price}</h2>
          <h2 className='w-fit rounded-lg font-bold bg-[#9f2089] mr-2 mb-2 mt-2 p-1 flex justify-center items-center text-white'>
            {exists = 'rating' in product}
            {exists && product.rating.rate} 
            <img src={img} alt="" style={{width: '16px', marginLeft: '5px'}}/>
          </h2>
          <h2>
            <span className='font-bold'>Description</span> :
            <br />
            <div className='ml-10'>
              {product.description}
            </div>
          </h2>
          <div className='flex justify-center align-baseline'>
            <button onClick={() => handleCart({id, ...product})} className='p-2 bg-[#9f2089] text-white font-bold rounded-md mt-4 pl-6 pr-6 w-fit hover:bg-pink-500 flex justify-center'>Add to Cart</button>
          </div>
        </div>
    </div>
  )
}

export default SingleProduct
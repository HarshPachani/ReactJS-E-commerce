import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    //hooks
  // const navigate = useNavigate();
  const[isOpen, setIsOpen] = useState(false);
  
  const {amount} = useSelector(state => state.cart);

  return (
    <div>
        <nav className="flex justify-between bg-gray-800 h-20">
          <div className="flex text-white justify-between">
            <span className="m-auto font-bold ml-8">E-comm</span>
            <div className="absolute right-0 top-3 md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 rounded text-gray-500 hover:text-gray-400">
                <div className="p-4 space-y-2 bg-black-600 rounded shadow">
                  <span className="block w-8 h-0.5 bg-gray-100"></span>
                  <span className="block w-8 h-0.5 bg-gray-100"></span>
                  <span className="block w-8 h-0.5 bg-gray-100"></span>
                </div>
              </button>
            </div>
          
            <div className={`w-full flex-grow md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
              <div className="text-sm lg:flex-grow absolute right-0">
                  <ul className='flex-column absolute right-0 top-16  bg-gray-800 md:flex md:relative md:justify-between md:top-0 justify-around'>
                    <li className="m-3 p-3 mr-8 hover:bg-gray-900  hover:font-bold rounded"><Link to = "/ReactJS-E-commerce" className="text-white">Home</Link></li>
                    <div className="relative">
                      <li className="m-3 p-3 mr-8 hover:bg-gray-900  hover:font-bold rounded">
                        <Link to="/ReactJS-E-commerce/cart">Cart 
                          <span className="absolute top-1 sm:top-4 bg-[#9f2089] rounded-md pl-1 pr-1">{amount}</span>
                        </Link>
                      </li>
                    </div>
                      <li className="m-3 p-3 mr-8 hover:bg-gray-900  hover:font-bold rounded"><Link to="/ReactJS-E-commerce/about">About Us</Link></li>
                  </ul> 
              </div>
            </div>
          </div>
        </nav>
    </div>

  );
}

export default Navbar
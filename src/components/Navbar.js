import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    //hooks
  const navigate = useNavigate();
  const[isOpen, setIsOpen] = useState(true);
  
  return (
    <div>
        <nav className="flex justify-between bg-gray-800 h-20">
          <div className="flex text-white justify-between">
            <div className="m-auto font-bold ml-8">E-comm</div>
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
                    <li className="m-3 p-3 mr-8 hover:bg-gray-900  hover:font-bold rounded"><Link to = "/" className="text-white">Home</Link></li>
                    <li className="m-3 p-3 mr-8 hover:bg-gray-900  hover:font-bold rounded"><Link to="/cart">Cart</Link></li>
                  </ul> 
              </div>
            </div>
          </div>
        </nav>

    </div>

  );
}

export default Navbar
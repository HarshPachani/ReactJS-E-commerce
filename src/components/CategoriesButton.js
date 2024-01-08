import React, { useEffect, useState } from 'react'

function Categories({categories, filterItems}) {
  const [item, setItem] = useState("all");
  const handleChange = (value) => {
    setItem(value);
  }

  useEffect(() => {
    filterItems(item);
  }, [item]);
  return (
    <>
      <div className='flex flex-col sm:flex-row sm:justify-end sm:items-center'>
        <span className='font-bold'>Categories:</span>
        <select name="category" value={item} onChange={(e) => handleChange(e.target.value)} id="category" className='m-4 sm:p-1 bg-[#9f2089] text-white font-bold rounded-md mt-4 w-fit hover:bg-pink-500'>
          {
              categories.map((category, index) => {
                  return (
                      <option key={index} value={category}  className='m-4 p-1 font-bold rounded-md mt-4 w-fit'>{category}</option>
                  )
              })
          }
        </select>
      </div>
    </>
  )
}

export default Categories
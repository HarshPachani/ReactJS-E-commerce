import React from 'react'

function About() {
  return (
    <div className='m-20'>
      <div className='mb-10 text-center'>
        <p className='font-bold text-2xl ml-5'>Welcome to E-Comm – Your Ultimate Shopping Destination!</p>
      </div>

      <div>
        <h1 className='font-bold text-2xl'>About E-comm</h1>
        <p className='ml-5 mt-2'>At E-Comm, we believe in providing a seamless and enjoyable online shopping experience. E-comm is dedicated to curating a diverse range of high-quality products and bringing them to your fingertips. Whether you're a fashion enthusiast, a tech guru, or someone looking for unique finds, we've got you covered.</p>
      </div>

      <div className='mt-8'>
        <h1 className='font-bold text-2xl'>Technology Stack</h1>
        <p className='ml-5 mt-2'>E-Comm is not just an ordinary e-commerce platform; it's a blend of cutting-edge technology and user-centric design. Our website is crafted using ReactJS for a smooth and responsive interface, TailwindCSS for a visually appealing layout, and Redux-toolkit to ensure efficient state management. We've leveraged the power of these technologies to create a platform that's not only visually stunning but also functionally robust.</p>
      </div>

      <div className='mt-8'>
        <h1 className='font-bold text-2xl'>What Sets E-comm Apart</h1>
        <ol className='ml-2'>
          <li className='mt-2 mb-2'>
            <h1 className='font-bold text-xl'>User-Friendly Interface:</h1>
            <p className='ml-5 mt-1'>We understand the importance of a user-friendly interface. That's why we've invested time and effort into designing an intuitive website that makes your shopping experience effortless.</p>
          </li>

          <li className='mt-2 mb-2'>
            <h1 className='font-bold text-xl'>Diverse Product Range:</h1>
            <p className='ml-5 mt-1'> E-Comm boasts a diverse collection of products, spanning various categories to cater to your unique needs and preferences. From the latest fashion trends to cutting-edge gadgets, we have it all.</p>
          </li>

          <li className='mt-2 mb-2'>
            <h1 className='font-bold text-xl'>Seamless Shopping Journey:</h1>
            <p className='ml-5 mt-1'>Explore our website with ease. From browsing through product categories to detailed product descriptions, adding items to your cart, and securely checking out – we've streamlined every step to ensure a hassle-free </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default About
import React,{useState} from 'react';
import {HiMenuAlt3} from 'react-icons/hi';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-orange-100 font-bold text-2xl z-20'>Dehkadeh</h1>
      <HiMenuAlt3 onClick={handleNav} className='text-orange-100 z-20 cursor-pointer' size={25}/>
      <div 
          className={
            nav
            ? 'fixed text-orange-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
          }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'> خانه </li>
          <li className='font-bold text-3xl p-8'> آپارتمان </li>
          <li className='font-bold text-3xl p-8'> زمین </li>
          <li className='font-bold text-3xl p-8'> مشارکت </li>
          <li className='font-bold text-3xl p-8'> درباره ما </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
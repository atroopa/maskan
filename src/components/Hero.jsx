import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen text-right'>
      <img className='top-0 left-0 w-full h-screen object-cover' src='https://www.wuestpartner.com/tachyon/sites/8/2022/03/blog_220325-MSCI.jpg' alt='/' />
      <div className='bg-black/40 absolute top-0 right-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-orange-100'>
        <div className='md:right-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>همه چیز محیاست</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>شما لایق یک زندگی آرام هستید</h1>
          <p className='max-w-[660px] drop-shadow-2xl py-2 text-xl'>املاک دهکده با ده سال سابقه درخشان آماده است تا بهترین ملک را به توجه به نیاز شما تهیه کند.</p>
          <button className='bg-white text-black font-bold '> بازدید </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
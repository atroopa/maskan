import React from 'react'

const Rooms = () => {
  return (
    <div className='text-right max-w-[1400px] h-[500px] bg-red-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2 '>
            <h3 className='text-2xl font-bold'>چگونه متن آگهی املاک آنلاین بنویسیم؟</h3>
            <p className='pt-4'>
            متن آگهی مشاور املاک نقش مهمی در خرید و فروش ملک دارد. بنابراین در متن آگهی املاک باید نکات مهم‌تری رعایت شود تا مشتری جذب شده و با مشاور تماس بگیرد. به‌طور کلی متن و توضیحات آگهی آنلاین املاک باید به‌حدی کامل باشد که اطلاعات موردنیاز مشتری را در یک نگاه به او منتقل کند. ازطرفی باید تاحدی اطلاعات ارائه کرد که مشتری به تماس ترغیب شود و درنهایت بتوان به هدف اصلی یعنی بازدید از ملک رسید. در ادامه با آکادمی املاک دیوار همراه باشید تا با نکاتی دربارهٔ نوشتن متن آگهی برای املاک آشنا شوید.
            </p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className=' border-double border-2 border-red-700 object-cover w-full h-full' src='https://academy.divar.ir/real-estate/wp-content/uploads/2020/12/accounting.jpg' alt='/' />
            <img className='border-double border-2 border-red-700 row-span-2 object-cover w-full h-full' src='https://academy.divar.ir/real-estate/wp-content/uploads/2022/02/bahavior-analysis.jpg' alt='/' />
            <img className=' border-double border-2 border-red-700 object-cover w-full h-full' src='https://academy.divar.ir/real-estate/wp-content/uploads/2021/03/agent-teaching.jpg' alt='/' />
        </div>
    </div>
  )
}

export default Rooms
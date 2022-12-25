import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 text-right'>
        {/* Left Side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src='https://www.wuestpartner.com/tachyon/sites/8/2022/09/Blogpost_220905_Erneuerungsstrategien_hero.jpg' alt='/' />
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://www.wuestpartner.com/tachyon/sites/8/2022/12/Blog_2212_Regression_Spitzenrendite_Hero.jpg' alt='/' />
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://www.wuestpartner.com/tachyon/sites/8/2022/05/case_220506_PotentialSeeker-Nutzungsreserven.jpg' alt='/' />
            <img className='row-span-3 object-cover w-full h-full p-2' src='https://www.financialexpress.com/wp-content/uploads/2022/06/388134892.jpg' alt='/' />
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg' alt='/' />
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-7xl font-bold'>نقشه بعدی شما, با ما </h3>
            <p className='text-2xl py-6 '>معیارها و ویژگی‌های مهم مشاور املاک حرفه‌ای</p>
            <p className='pb-6'>
            پس از صحبت در مورد تعریف مشاور املاک، کارهایی که انجام‌ می‌دهد و نقش مهمی که در خرید ملک‌ ایفا‌ می‌کند، ما در مورد مهم‌ترین معیارهایی صحبت‌ می‌کنیم که از طریق آنها‌ می‌توانید مشاور املاک را انتخاب کنید، که شما را راهنمایی‌ می‌کند. زمانی که‌ می‌خواهید ملک بخرید، مسیر درستی را طی کنید.

ابتدا‌ می‌توانید یک مشاور املاک را به‌صورت آنلاین جستجو کنید، یا از یک دوست برای پیدا کردن یک مشاور املاک مجرب، در منطقه‌ای که به‌دنبال ملک هستید، استفاده کنید. اما صرفا چون دوست شماست، با قطعیت به او اعتماد نکنید.

همچنین‌ می‌توانید بیوگرافی و حرفه‌ای بودن مشاور املاک مورد بررسی قرار دهید، مهم‌ترین دستاوردهای وی را مشخص کرده و سطح کار را متناسب با آن ارزیابی کنید. همچنین‌ می‌توان از فردی که در برخورد با آن تجربه داشته است سوال کرد. مثلا یک دفتر مشاوره خاص، برای کسب اطلاعات از او در مورد عملکرد مشاوره املاک. این موضوع واقعاً به‌وجود مجموعه‌ای از معیارها مربوط‌ می‌شود که هنگام انتخاب مشاور املاک باید به آنها توجه کنید:
            </p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>ادامه مطلب</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>دیگر مقالات</button>
            </div>
        </div>
    </div>
  );
}

export default Plan;
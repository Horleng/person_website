import React from 'react';
import Bachelor from "./img/Bachelor.png"
const Educations = () => {
    return (
        <div className='min-h-[400px] mt-10'>
            <span className='mx-auto lg:text-3xl text-2xl font-bold font-Sono flex gap-4 items-center'>
                <img src={Bachelor} alt="" width="60px"/>Educations
            </span>
            <hr className='border-[1.5px] border-gray-400'/>
            <div className='grid gap-10 mt-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                <div className='bg-gray-100 dark:bg-gray-700 h-auto rounded-lg py-5 px-3 flex flex-col items-center shadow-[0_0_5px] shadow-gray-400'>
                    <img src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg" alt="" className='h-[120px] w-full  rounded-lg cursor-pointer transition-all hover:scale-[1.05]'/>
                    <span className='mx-auto md:text-2xl text-lg font-bold mt-3'>2022-Present</span>
                    <span className='text-xs break-all mt-2 text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae quia 
                        sunt atque voluptatem ipsa perferendis voluptas vitae, nostrum inventore.
                    </span>
                    <button className='cursor-not-allowed transition-all dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>detail</button>
                </div>
                <div className='bg-gray-100 dark:bg-gray-700 h-auto rounded-lg py-5 px-3 flex flex-col items-center shadow-[0_0_5px] shadow-gray-400'>
                    <img src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg" alt="" className='h-[120px] w-full  rounded-lg cursor-pointer transition-all hover:scale-[1.05]'/>
                    <span className='mx-auto md:text-2xl text-lg font-bold mt-3'>2018-2021</span>
                    <span className='text-xs break-all mt-2 text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae quia 
                        sunt atque voluptatem ipsa perferendis voluptas vitae, nostrum inventore.
                    </span>
                    <button className='cursor-not-allowed transition-all dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>detail</button>
                </div>
                <div className='bg-gray-100 dark:bg-gray-700 h-auto rounded-lg py-5 px-3 flex flex-col items-center shadow-[0_0_5px] shadow-gray-400'>
                    <img src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg" alt="" className='h-[120px] w-full  rounded-lg cursor-pointer transition-all hover:scale-[1.05]'/>
                    <span className='mx-auto md:text-2xl text-lg font-bold mt-3'>2015-2018</span>
                    <span className='text-xs break-all mt-2 text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae quia 
                        sunt atque voluptatem ipsa perferendis voluptas vitae, nostrum inventore.
                    </span>
                    <button className='cursor-not-allowed transition-all dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>detail</button>
                </div>
                <div className='bg-gray-100 dark:bg-gray-700 h-auto rounded-lg py-5 px-3 flex flex-col items-center shadow-[0_0_5px] shadow-gray-400'>
                    <img src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg" alt="" className='h-[120px] w-full  rounded-lg cursor-pointer transition-all hover:scale-[1.05]'/>
                    <span className='mx-auto md:text-2xl text-lg font-bold mt-3'>2009-2015</span>
                    <span className='text-xs break-all mt-2 text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae quia 
                        sunt atque voluptatem ipsa perferendis voluptas vitae, nostrum inventore.
                    </span>
                    <button className='cursor-not-allowed transition-all dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>detail</button>
                </div>
            </div>
        </div>
    );
}

export default Educations;

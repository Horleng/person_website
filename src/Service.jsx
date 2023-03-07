import React from 'react';
import Maintainent from "./img/web_main.png"
import Code from "./img/Code.png"
import {AiFillQuestionCircle}  from "react-icons/ai"
const Service = () => {
    const opentTelegrm = ()=>{
        window.open("https://t.me/Horlenggg");
    }
    return (
        <div className='mt-10'>
            <span className='mx-auto lg:text-3xl text-2xl font-bold font-Sono flex gap-4 items-center'>
                <AiFillQuestionCircle size="25px"/>Service
            </span>
            <hr className='border-[1.5px] border-gray-500'/>
            <div className='grid gap-10 mt-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                <div className='bg-gray-100 dark:bg-gray-700 h-[20rem] rounded-lg p-5 flex flex-col items-center shadow-[0_0_5px] shadow-gray-400'>
                    <img src={Maintainent} alt=""  width="200px"/>
                    <span className='mx-auto md:text-xl text-lg font-bold'>Website Maintence</span>
                    <span className='text-xs break-all px-5 mt-2 text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae quia 
                        sunt atque voluptatem ipsa perferendis voluptas vitae, nostrum inventore.
                    </span>
                    <span className='flex justify-center gap-5'>
                        <button className='transition-all cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>More</button>
                        <button onClick={opentTelegrm} className='transition-all dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>Chat</button>
                    </span>
                </div>
                <div className='bg-gray-100 dark:bg-gray-700 h-[20rem] rounded-lg p-5 flex flex-col items-center shadow-[0_0_5px] shadow-gray-400'>
                    <img src={Code} alt="" width="180px"/>
                    <span className='mx-auto md:text-xl text-lg font-bold'>Create website</span>
                    <span className='text-xs break-all px-5 mt-2 text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae quia 
                        sunt atque voluptatem ipsa perferendis voluptas vitae, nostrum inventore.
                    </span>
                    <span className='flex justify-center gap-5'>
                        <button className='transition-all cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>More</button>
                        <button onClick={opentTelegrm} className='transition-all dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>Chat</button>
                    </span>
                </div>
                <div className='bg-gray-100 dark:bg-gray-700 h-[20rem] rounded-lg p-5 flex flex-col items-center shadow-[0_0_5px] shadow-gray-400'>
                    <img src={Maintainent} alt=""  width="200px"/>
                    <span className='mx-auto md:text-xl text-lg font-bold'>Website Maintence</span>
                    <span className='text-xs break-all px-5 mt-2 text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae quia 
                        sunt atque voluptatem ipsa perferendis voluptas vitae, nostrum inventore.
                    </span>
                    <span className='flex justify-center gap-5'>
                        <button className='transition-all cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>More</button>
                        <button onClick={opentTelegrm} className='transition-all dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>Chat</button>
                    </span>
                </div>
                <div className='bg-gray-100 dark:bg-gray-700 h-[20rem] rounded-lg p-5 flex flex-col items-center shadow-[0_0_5px] shadow-gray-400'>
                    <img src={Code} alt="" width="180px"/>
                    <span className='mx-auto md:text-xl text-lg font-bold'>Create website</span>
                    <span className='text-xs break-all px-5 mt-2 text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae quia 
                        sunt atque voluptatem ipsa perferendis voluptas vitae, nostrum inventore.
                    </span>
                    <span className='flex justify-center gap-5'>
                        <button className='transition-all cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>More</button>
                        <button onClick={opentTelegrm} className='transition-all dark:bg-blue-600 dark:hover:bg-blue-500 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500 text-white dark:shadow-blue-500 text-sm py-[5px] px-5 rounded-md mt-4'>Chat</button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Service;

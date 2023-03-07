import React from 'react';
import {IoLocation} from "react-icons/io5"
import {AiFillInfoCircle,AiOutlineMail,AiFillPhone} from "react-icons/ai"
const Contact = () => {
    const OpentURL = (url)=>{
        window.open(url);
    }
    return (
        <div className='mt-10'>
            <span className='flex items-center gap-2'>
                <AiFillInfoCircle size="30px"/>
                <span className='lg:text-3xl text-2xl font-bold font-Sono '>ContactUs</span>
            </span>
            <hr className='border-[1.5px] border-gray-500'/>
            <div className='mt-5 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                <div onClick={()=>OpentURL("https://goo.gl/maps/k1urJVVkWRgGaqNw9")} className='bg-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-100 cursor-pointer sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] 
                grid place-content-center gap-5 rounded-lg shadow-[0_0_5px] shadow-gray-500'>
                    <IoLocation size="35px" fill='#425C81' className='mx-auto'/>
                    <span className='lg:text-lg text-base font-bold'>#Company</span>
                </div>
                <div  onClick={()=>OpentURL("mailto:ly.horleng.1221@rupp.edu.kh")} className='bg-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-100 cursor-pointer sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] 
                grid place-content-center gap-5 rounded-lg shadow-[0_0_5px] shadow-gray-500'>
                    <AiOutlineMail size="35px" fill='#425C81' className='mx-auto'/>
                    <span className='lg:text-lg text-base font-bold'>#Email</span>
                </div>
                <div onClick={()=>OpentURL("tel:094083197")}  className='bg-white dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-100 cursor-pointer sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] 
                grid place-content-center gap-5 rounded-lg shadow-[0_0_5px] shadow-gray-500'>
                    <AiFillPhone size="35px" fill='#425C81' className='mx-auto'/>
                    <span className='lg:text-lg text-base font-bold'>#Smart</span>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;

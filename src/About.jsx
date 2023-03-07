import React from 'react';
import Image from "./img/myImg-01.jpg"
const About = () => {
    return (
        <div className='mt-10'>
            <span className='lg:text-3xl text-2xl font-bold font-Sono '>AboutUs</span>
            <hr className='border-[1.5px] border-gray-500'/>
            <div className='md:flex md:justify-between mt-5'>
                <div className='md:flex-[0.5] flex justify-center'>
                    <img src={Image} alt="" className='w-[300px] rounded-lg cursor-pointer'/>
                </div>
                <div className='md:flex-1 md:mt-0 mt-10 mx-auto'>
                    <span className='lg:text-xl text-base  font-bold uppercase'>
                        &#128073; Who we are &#10068;
                    </span>
                    <ul className='mt-2 mb-10 ml-16 list-disc'>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, error</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, error</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, error</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, error</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, error</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, error</li>
                    </ul>
                    <span className='md:text-xl  text-base font-bold uppercase'>
                        &#128073; Why choose us &#10068;
                    </span>
                    <ul className='mt-2 ml-16 list-disc'>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, fugiat</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, fugiat</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;

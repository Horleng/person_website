import React, { useContext } from 'react';
import Code from "./img/Code.png"
import {Scroller} from "./Context"
const Home = () => {
    const {setHm,setEdu,setCon,setAb,setServe} = useContext(Scroller);
    const activePage = (para)=>{
        if(para==="education"){
            setHm(false);setEdu(true);setCon(false);setAb(false);setServe(false);
          }
          else if(para==="service"){
            setHm(false);setEdu(false);setCon(false);setAb(false);setServe(true);
          }
    }
    return (
        <div className='h-[500px] flex md:flex-row shadow-[0_0_5px] shadow-gray-400 dark:shadow-gray-700 lg:py-[20px] md:px-[20px] flex-col-reverse md:justify-between md:items-center md:mt-10 pt-5'>
            <div className='md:flex-1 flex-1 grid place-items-center'>
                <span className='font-bold lg:text-3xl text-xl font-Rampart uppercase bg-gradient-to-r from-[#bcc3e8] to-[#939c93] dark:from-blue-700 dark:to-orange-500 bg-clip-text text-transparent'>
                    Wellcome to 
                </span><br />
                <span className='font-bold lg:text-3xl text-xl font-Rampart uppercase bg-gradient-to-r to-[#bcc3e8] from-[#939c93] dark:to-blue-700 dark:from-orange-500 bg-clip-text text-transparent'>
                    my personal website &#128075;
                </span><br />
                <span className='font-Shantell_Sans font-bold lg:text-base md:text-sm text-sm uppercase from-[#676bdd] via-[#97c0c6] to-[#454242]  bg-gradient-to-r dark:from-blue-700 dark:via-lime-700 darK:to-orange-500 bg-clip-text text-transparent'>
                &#128161; Do you finding website service &#10068;
                </span>
                <div className='flex gap-5 mt-5 md:mb-0 mb-10'>
                    <button onClick={()=>activePage("service")} className='text-sm lg:w-[150px] w-[120px] py-2 transition-all text-white bg-cyan-500 shadow-lg hover:bg-cyan-400 shadow-cyan-500/50 dark:bg-blue-500 dark:hover:bg-blue-400 rounded-full'>
                        Service
                    </button>
                    <button onClick={()=>activePage("education")} className='text-sm  lg:w-[150px] w-[120px] py-2 transition-all  text-white bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/50 dark:bg-blue-500 dark:hover:bg-blue-400 rounded-full'>
                        Education
                    </button>
                </div>
            </div>
            <div className='md:flex-[0.8] flex-1'>
                <img src={Code} alt="" />
            </div>
        </div>
    );
}

export default Home;

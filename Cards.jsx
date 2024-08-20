import React from 'react';
// import { BsBrowserEdge } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi"

const Cards = () => {
    return (
        <div className='bg-white py-[10rem] px-4 w-full'>
            <div className='grid md:grid-cols-3 gap-8 max-w-[1240px] mx-auto '>
                <div className='w-full my-8 p-4 flex flex-col shadow-xl rounded-lg hover:scale-95 duration-300 '>
                   <FiUserCheck className='text-7xl md:text-8xl text-center w-full'/>
                    <h2 className='text-center py-4 font-bold text-2xl s'>Single User</h2>
                    <p className='font-bold text-center text-4xl'>$149</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mt-3 font-bold'>500 GB Storage </p>
                        <p className='py-2 border-b font-bold'>1 Granted User </p>
                        <p className='py-2 border-b font-bold'>Send up to 2 GB </p>
                    </div>
                    <button className='bg-[#00df9a] py-3 text-white font-bold text-2xl mt-2'>Start Trial</button>
                  
                </div>
                <div className='w-full p-4 flex flex-col shadow-xl rounded-lg hover:scale-95 duration-300 my-8'>
                   <LuUsers className='text-7xl md:text-8xl text-center w-full'/>
                    <h2 className='text-center py-4 font-bold text-2xl s'>Double User</h2>
                    <p className='font-bold text-center text-4xl'>$199</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mt-3 font-bold'>500 GB Storage </p>
                        <p className='py-2 border-b font-bold'>1 Granted User </p>
                        <p className='py-2 border-b font-bold'>Send up to 2 GB </p>
                    </div>
                    <button className='bg-[#00df9a] py-3 text-white font-bold text-2xl mt-2'>Start Trial</button>
                  
                </div>

                <div className='w-full my-8 p-4 flex flex-col shadow-xl rounded-lg hover:scale-95 duration-300 my-8'>
                   <HiOutlineUserGroup  className='text-7xl md:text-8xl text-center w-full'/>
                    <h2 className='text-center py-4 font-bold text-2xl '>Triple User</h2>
                    <p className='font-bold text-center text-4xl'>$299</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mt-3 font-bold'>500 GB Storage </p>
                        <p className='py-2 border-b font-bold'>1 Granted User </p>
                        <p className='py-2 border-b font-bold'>Send up to 2 GB </p>
                    </div>
                    <button className='bg-[#00df9a] py-3 text-white font-bold text-2xl mt-2'>Start Trial</button>
                  
                </div>

            </div>
            <p></p>
            
        </div>
    );
}

export default Cards;
import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='grid md:grid-cols-2 px-8  sm:px-3'>
                <div className='px-10 my-3 md:text-center'>
                    <h1 className='font-bold md:text-4xl text-3xl  '>Want tips & and tricks to optimize your flow?</h1>
                    <p className=' py-2 md:text-[20x] '>Sigh up to our newsletter and stay up to date</p>
                </div>

                <div className='mt-4 '>
                    <div className='flex flex-col px-8 sm:flex-row items-center justify-between w-full py-6'>
                    <input className='w-full  p-3 rounded-md ' type="email" placeholder='example@gmail' />
                    <button className='bg-[#00df9a]  w-[200px] ml-2 py-3 my-4 px-6 font-medium rounded-md  text-black md:w-full sm:w-[40px]'>Notify Me</button>
                   
                    </div>
                    <div className=' mx-10 mt-[-25px] flex flex row sm:text-center flex flex-row '>
                    <p className='text-center'>We care bout the protection of our. Read our</p> 
                    <p className='mx-2 text-center'><span className='text-[#00df9a]'>Privacy Policy</span></p>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Newsletter;
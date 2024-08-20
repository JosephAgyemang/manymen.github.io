import React from 'react';
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='bg-white w-full py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='mx-auto w-[500px] my-6' src={laptop} alt="/" />
                <div className='py-8 px-4 md:py-16'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='py-1 font-bold md:text-4xl sm:text-2xl text-2xl'>Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Quaerat, eligendi non. Hic doloremque ratione a quod maxime 
                         tempore odio cupiditate, voluptate ad consectetur quae odit 
                         quia maiores quis ea omnis.
                    </p>
                    <button className='bg-[#00df9a] w-[150px] text-white font-medium py-2 mt-3 rounded-md justify-center align-center'>Get Started</button>
                </div>

            </div>
            
        </div>
    );
}

export default Analytics;
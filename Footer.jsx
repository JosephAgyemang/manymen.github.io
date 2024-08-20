import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";

const Footer = () => {
    return (
        <div className=' py-[150px] w-full grid md:grid-cols-4'>
            <div className='text-center p-6'>
                <h1 className='text-[#00df9a] mt-[-120px] text-2xl px-4 font-bold'>REACT.</h1>
                <p className='text-white py-3 text-xl md:text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut soluta assumenda facere necessitatibus animi?</p>
                <div className='text-white flex flex-row gap-2 text-2xl justify-center align-center py-3 '>
                <FaSquareFacebook />
                <AiFillInstagram />
                <IoLogoTwitter />
                <BsGithub  />
                <GrReactjs  />
                

                </div>

            </div>
            <div className='text-center p-6 '>
                <p className='text-gray-400  text-3xl px-4 font-medium mt-2 md:mt-[-120px] '>Solutions</p>

                <div className='p-4 text-xl md:text-[15px] '>
                <p className='text-white'>Analytics</p>
                <p className='text-white'>Marketting</p>
                <p className='text-white'>Commence</p>
                <p className='text-white'>Insights</p>
                </div>
                
                

               

            </div>


            <div className='text-center p-6 '>
                <p className='text-gray-400  text-3xl px-4 font-medium mt-2 md:mt-[-120px]'>Support</p>

                <div className='p-4 text-xl md:text-[15px] '>
                <p className='text-white'>Pricing</p>
                <p className='text-white'>Documentations</p>
                <p className='text-white'>Commence</p>
                <p className='text-white'>Insights</p>
                </div>
                
                

               

            </div>


            <div className='text-center p-6 '>
                <p className='text-gray-400  text-3xl px-4 font-medium mt-2 md:mt-[-120px]'>Company</p>

                <div className='p-4 text-xl md:text-[15px] '>
                <p className='text-white'>About</p>
                <p className='text-white'>Blog</p>
                <p className='text-white'>Jobs</p>
                <p className='text-white'>Insights</p>
                </div>
                
                

               

            </div>
            
        </div>
    );
}

export default Footer;
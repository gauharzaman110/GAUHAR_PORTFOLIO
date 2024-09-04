"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid';


const HeroContent = () => {
    return (
        <motion.div
            initial="Hidden"
            animate="visible"
            className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
                    <SparklesIcon className='text-[#b49bff] mr-[10px] -5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>My Portfolio-Website</h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className='flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                    It&apos;s <br/><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Syed Gauhar Zaman </span> <br/>Full-stack Web-Developer
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                  Creating seamless, scalable web solutions with expertise in both front-end and back-end development.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    Learn more
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'
            >
<img 
src="/mainIconsdark.svg" 
alt="Working......"
height={600}
width={700}
/>
            </motion.div>
        </motion.div>
    )
}

export default HeroContent

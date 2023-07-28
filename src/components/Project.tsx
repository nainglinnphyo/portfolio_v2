'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectOne } from '@/utils';

function Project() {

     const [scrollValue, setScrollValue] = useState(0);

     useEffect(() => {
          const handleScroll = () => {
               const scrollPosition = window.scrollY;
               setScrollValue(scrollPosition);
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const animationVariants = {
          hidden: {
               width: 0,
               opacity: 0.5,
          },
          visible: {
               opacity: 1,
               width: 350,
               transition: {
                    duration: 1,
                    ease: 'easeInOut',
               },
          },
     };

     return (
          <div className='flex-col px-4 md:px-8 items-center md:max-w-2xl lg:max-w-6xl mx-auto'>
               <div className='flex items-center justify-between'>
                    <div className='text-start flex items-center w-[70%] md:w-[40%] space-x-2'>
                         <h1 ><span className='text-green-500'>#</span>projects</h1>
                         <motion.div
                              initial="hidden"
                              animate={scrollValue >= 120 ? 'visible' : 'hidden'}
                              variants={animationVariants}
                              className='bg-green-500 w-28 md:w-[20%] h-[0.2rem]'></motion.div>

                    </div>
                    <div>
                         <h1 className='text-xs'><Link href={'/works'}>View all {'~~>'}</Link></h1>
                    </div>
               </div>
               <div className="grid md:grid-cols-3 md:gap-2 2xl:gap-5 gap-4 mt-10 grid-cols-1 items-start">
                    {
                         projectOne.map((p) => {
                              return (
                                   <div className='border-[1.5px] border-[#acb2bf]' key={p.title}>
                                        <h1 className='p-2 border-b-[1.5px] border-[#acb2bf]'>{p.techStack}</h1>
                                        <div className='p-2 flex flex-col justify-center h-auto space-y-4'>
                                             <h1 className=''>{p.title}</h1>
                                             <p className='text-sm'>{p.desc}</p>
                                             <div className='border-green-500  border-[1.5px] w-20'>
                                                  <h1 className='text-sm p-2'><Link href={p.link}>Code{'<~>'}</Link></h1>
                                             </div>
                                        </div>
                                   </div>
                              )
                         })
                    }

               </div>
          </div >
     )
}

export default Project
'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/about.module.css';
import Link from 'next/link';
import Image from 'next/image';
import LineAnimation from './LineAnimation';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import NestImg from '../../public/img/nest.png'
import { projectOne } from '@/utils';

function About() {

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
          <div className='flex-col px-4 md:px-8 pt-10 md:pt-20 items-center md:max-w-2xl lg:max-w-6xl mx-auto '>
               <div className='flex items-center justify-between'>
                    <div className='text-start flex items-center w-[70%] md:w-[40%] space-x-2'>
                         <h1><span className='text-green-500'>#</span>about/me</h1>
                         <motion.div
                              initial="hidden"
                              animate={scrollValue >= 650 ? 'visible' : 'hidden'}
                              variants={animationVariants}
                              className='bg-green-500 w-48 md:w-full h-[0.2rem]'></motion.div>
                    </div>
               </div>
               <div className='md:flex max-sm:flex-col flex items-center py-4'>
                    <div className='py-2 md:w-1/2 w-full'>
                         <p className='pt-4 text-base md:text-lg'>Hello, I'm Naing Linn Phyo!</p>
                         <p className='md:pt-6 pt-4 text-sm md:text-base'> I'm a skilled fullstack developer proficient in JavaScript, TypeScript, PHP, and Golang. With expertise in frontend and backend development, I create powerful and responsive web applications.</p>
                         <p className='md:py-6 py-4 text-sm md:text-base'>Currently, I am actively involved in the development of <a href="https://farytaxi.com" className='text-green-500' target='_blank'>farytaxi.com</a> and <a href="https://getbak.co" className='text-green-500' target='_blank'>getbak.co</a>, microservices technologies like gRPC and Redis to build efficient and scalable solutions.</p>
                         <motion.div
                              whileHover={{
                                   x: 0,
                                   boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.3)",
                              }}
                              className='border border-green-500 w-max p-2 md:text-sm text-xs'><Link href={''} className=''>Read more {'->'}</Link></motion.div>
                    </div>
                    <div className='md:w-1/2 text-[0.36rem] md:text-[0.6rem] leading-2 relative'>
                         <div className='w-14 h-14 md:w-20 hidden md:block md:h-20 top-10 left-10 md:left-4 absolute'>
                              <Image src={'/img/Dots.svg'} alt={''} width={100} height={100} className='w-full h-full' />
                         </div>
                         <div className='w-12 h-12 md:w-20 hidden md:block md:h-20 bottom-10 right-8 md:right-0 absolute'>
                              <Image src={'/img/Dots.svg'} alt={''} width={100} height={100} className='w-full h-full' />
                         </div>
                         <pre className='md:ml-20'>
                              <code className=''>
                                   {`                                 
                              ... 
                         .-+*######*=:     
                        +##%%%%%%%%%%##=    
                       *#%%%@@@@@@@%%%##+            
                      :%%#%######**+++**#-           
                      -#*=+++++++++++++=*+           
                      -#*=++++======+++=+-           
                      .*+=++***++++****+=.           
                      :=+=+*###*++*###*+=+.          
                     .*++=++++++++++++++==           
                      .++===++++===+++++=.           
                        .:=+++++***++++=.            
                          =++*++******+-             
                          :++********+-              
                        :==+*++*****+=               
                     -:..:=+*******++=               
                 ....:+-...-+*********.:.            
              ........:+=:...:-==+***=.:=.....       
            ............=+-..:.:::-::...=-......     
       ............. .............:..:.::.........   
      ............................:.:.............   
     ..............................................  
    .................................:..:::::::.:..  
   ........:.:.....:..................::....::-.:..  
   ::......:.:....::...:......:.....:..:..:::......: 
  -===......::....:...:::...::.............::......-.
  .:-:......:-.......:::....::.......:...:..:.......  
 .... .....::-......::::...::........:...::....::...  
 ...........::......:::...::......:..::...:....:..::- 
 .--:......:::-:.....:::...::...........:...:....-==-:  
  :-=+=-::...:-.....:::....:............::..:...:#*     
      *****+++......::....::....................=**-    
     .+++++**-:.....::...::..............:......+**+    
     -+++**** ::....:....:.....:................+***    
     =++++**= -:........:.....::................****    
     =++++**-.:........:.......................-****.   
     +++++**-::..............::................=****    
     ++++++*--..............::.................*****    
     =++++++*=.............:::.................#****    
     :++++++*+:...........::..................:#***+    
     .++++++++:..........:::...................****=    
      ++**+++*-.........:::....................+***-    
      -+**+++*=:........::.................... -***-    
       +***++*=........:.......:.............. -***-    
       :++*++++:.............................. -***=    
        ++++++*:.............................. +***:
                             `}
                              </code>
                         </pre>
                    </div>
               </div>
          </div>
     )
}

export default About
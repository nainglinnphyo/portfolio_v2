'use client'
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { navbarItems } from '@/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

function NavBar() {
     const [open, setOpen] = useState(false)

     useEffect(() => {
          const handleResize = () => {

               if (window.innerWidth >= 700) {
                    setOpen(false)
               }

          };

          window.addEventListener('resize', handleResize);

          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);

     return (
          <motion.div className='flex h-16 items-center p-4 md:px-8 md:max-w-2xl lg:max-w-6xl mx-auto justify-between  sticky top-0 shadow-sm bg-[#282C34] z-20' initial={{ translateY: -500 }} animate={{ translateY: 0 }} exit={{ opacity: 0 }}>
               <Image src="/code.svg" alt="" className='h-8' width={40} height={20} />
               <div className={` ${open ? 'h-full bg-[#282c34] fixed inset-0 justify-center flex-col flex items-start text-start' : 'flex'}`}>
                    {navbarItems.map((i) => {
                         return (
                              <div key={i.name} className={`${open ? 'mb-10 text-2xl' : 'hidden'} md:flex pl-8`}>
                                   <span className='text-green-500'>#</span>{i.name}
                              </div>
                         )
                    })}
                    <div className={`md:hidden flex justify-center ${open ? 'absolute bottom-10 space-x-3 w-full' : 'hidden'}`}>
                         <Icon icon='mdi:github' color='#acb2bf'
                              className={`h-8 w-8`}
                         />
                         <Icon icon='entypo-social:linkedin-with-circle' color='#acb2bf'
                              className={`h-8 w-8`}
                         />
                         <Icon icon='ic:baseline-telegram' color='#acb2bf'
                              className={`h-8 w-8`}
                         />
                    </div>
               </div>
               <Icon icon={`${open ? 'material-symbols:close' : 'system-uicons:menu-hamburger'}`} onClick={() => setOpen((pre) => !pre)} color='white'
                    className={`absolute right-4 h-8 w-8 block md:hidden`}
               />
          </motion.div>
     )
}

export default NavBar
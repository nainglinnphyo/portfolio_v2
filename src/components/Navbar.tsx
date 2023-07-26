'use client'
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { navbarItems } from '@/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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

     useEffect(() => {
          document.body.style.position = open ? 'fixed' : 'static'
     }, [open])

     const pathName = usePathname();

     return (
          <motion.div className='w-full sticky top-0 bg-[#282C34] z-20' initial={{ translateY: -100 }} animate={{ translateY: 0 }} exit={{ opacity: 0 }}>
               <div className='flex h-16 items-center p-4 md:px-8 md:max-w-2xl lg:max-w-6xl mx-auto justify-between' >
                    <Image src="/code.svg" alt="" className='h-8' width={40} height={20} />
                    <div className={` ${open ? 'h-full bg-[#282c34] fixed inset-0 justify-center flex-col flex items-start text-start' : 'flex'}`}>
                         {navbarItems.map((i) => {
                              return (
                                   <div key={i.name} className={`${open ? 'mb-10 text-2xl' : 'hidden'} md:flex pl-8`}>
                                        <div className='flex'>
                                             {/* <Link onClick={() => setOpen(false)} href={i.path} className={`border p-1 border-green-400 hover:text-white ${pathName === i.path ? '' : ''}`}>{i.name}</Link> */}
                                             <span className='text-green-500'>#</span><Link onClick={() => setOpen(false)} href={i.path} className={`hover:text-green-400 ${pathName === i.path ? 'text-green-400' : ''}`}>{i.name}</Link>
                                        </div>
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
               </div>
          </motion.div>
     )
}

export default NavBar
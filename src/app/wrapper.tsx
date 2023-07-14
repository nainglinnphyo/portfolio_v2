'use client'
import DropDownSocial from '@/components/DropDownSocial'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Wrapper({ children }: { children: React.ReactNode }) {

     const backWardX = useMotionValue(-10);
     const backWardY = useMotionValue(-10);
     const backWardSpringConfig = { damping: 30, stiffness: 200 };
     const backWardXSpring = useSpring(backWardX, backWardSpringConfig);
     const backWardYSpring = useSpring(backWardY, backWardSpringConfig);

     const cursorX = useMotionValue(0);
     const cursorY = useMotionValue(0);
     const springConfig = { damping: 30, stiffness: 500 };
     const cursorXSpring = useSpring(cursorX, springConfig);
     const cursorYSpring = useSpring(cursorY, springConfig);

     useEffect(() => {
          const moveCursor = (e: any) => {
               cursorX.set(e.clientX - 0)
               cursorY.set(e.clientY - 0)
          };
          const backWardMoveCursor = (e: any) => {
               backWardX.set(e.clientX - 9)
               backWardY.set(e.clientY - 9)
          };
          window.addEventListener('mousemove', moveCursor)
          window.addEventListener('mousemove', backWardMoveCursor)
          return () => {
               window.removeEventListener('mousemove', backWardMoveCursor)
               window.removeEventListener('mousemove', moveCursor)
          }
     }, [])

     return (
          <div>
               <motion.div className='hidden md:block pointer-events-none w-[0.35rem] h-[0.35rem] bg-[#abb1be] rounded-full z-[9999] fixed' style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
               }}>
               </motion.div>
               <motion.div className={`hidden md:block pointer-events-none w-6 h-6 rounded-full border-[2px] border-[#abb1be] z-[9999] fixed`} style={{
                    translateX: backWardXSpring,
                    translateY: backWardYSpring,
               }}>
               </motion.div>
               <NavBar />
               <DropDownSocial />
               {children}
               <Footer />
          </div>
     )
}

export default Wrapper
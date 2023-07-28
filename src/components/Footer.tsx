'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full border-t-2 border-[#acb2bf] mt-auto'>
      <div className='md:max-w-2xl lg:max-w-6xl mx-auto py-2 md:px-8 px-4 md:flex items-center justify-between flex'>
        <div className='max-sm:flex flex-col text-sm md:text-base'>
          <h1 className='text-start'>Naing Linn Phyo {'< / >'}</h1>
          <h1 className='text-xs'>Fullstack developer <br className='md:hidden' /> based in yangon,Myanmar!</h1>
        </div>
        <div className='space-y-2 py-4'>
          <h1>Media</h1>
          <div className='flex space-x-2 items-center'>
                    <Link href='https://github.com/nainglinnphyo' target='_blank' className='cursor-pointer'>
                         <Icon icon='mdi:github' color='#acb2bf'
                              className={`h-6 w-6`}
                         />
                    </Link>
                    <Link href='https://www.linkedin.com/in/naing-linn-phyo-768852175/' target='_blank' className='cursor-pointer'>
                         <Icon icon='entypo-social:linkedin-with-circle' color='#acb2bf'
                              className={`h-6 w-6`}
                         />
                    </Link>
                    <Link href='https://telegram.me/defined_me' target='_blank' className='cursor-pointer'>
                         <Icon icon='ic:baseline-telegram' color='#acb2bf'
                              className={`h-6 w-6`}
                         />
                    </Link>
                    <Link href='https://instagram.com/naing_linnphyo' target='_blank' className='cursor-pointer'>
                         <Icon icon='ri:instagram-line' color='#acb2bf'
                              className={`h-6 w-6`}
                         />
                    </Link>
               </div>
        </div>
      </div >
      <span className="text-sm py-2 text-gray-500 dark:text-gray-300 text-center flex justify-center">© 2023 Made by NaingLinnPhyo
      </span>
    </div >
  )
}

export default Footer
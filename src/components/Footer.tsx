'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full border-t-2 border-[#acb2bf]'>
      <div className='md:max-w-2xl lg:max-w-6xl mx-auto py-2 md:px-8 px-4 md:flex items-center justify-between flex'>
        <div className='max-sm:flex flex-col text-sm md:text-base'>
          <h1 className='text-start'>Naing Linn Phyo {'< / >'}</h1>
          <h1 className='text-xs'>Fullstack developer <br className='md:hidden'/> based in yangon,Myanmar!</h1>
        </div>
        <div className='space-y-2 py-4'>
          <h1>Media</h1>
          <div className='flex space-x-1'>
            <Link href='https://github.com/nainglinnphyo' target='_blank'><Icon icon='mdi:github' width={25} height={25} /></Link>
            <Link href='https://www.linkedin.com/in/naing-linn-phyo-768852175/' target='_blank'><Icon icon='entypo-social:linkedin-with-circle' width={25} height={25} /></Link>
            <Link href='https://telegram.me/defined_me' target='_blank'><Icon icon='ic:baseline-telegram' width={25} height={25} /></Link>
            <Link href='https://instagram.com/naing_linnphyo' target='_blank'><Icon icon='ri:instagram-line' width={25} height={25} /></Link>
          </div>
        </div>
      </div >
      <p className='text-center text-xs py-4'>© Copyright 2523. Made by NaingLinnPhyo</p>
    </div >
  )
}

export default Footer
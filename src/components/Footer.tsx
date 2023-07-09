'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full border-t-2 border-[#acb2bf]'>
      <div className='md:max-w-2xl lg:max-w-6xl mx-auto py-2 md:px-8 px-4 md:flex max-sm:flex-col justify-between'>
        <div className='max-sm:flex flex-col text-sm md:text-base'>
          <h1 className='text-start'>Naing Linn Phyo {'< / >'}</h1>
          <h1 className='text-xs'>Fullstack developer based in yangon,Myanmar!</h1>
        </div>
        <div className='space-y-2 py-4'>
          <h1>Media</h1>
          <div className='flex space-x-1'>
            <Link href='https://github.com/nainglinnphyo' target='_blank'><Icon icon='mdi:github' width={30} height={30} /></Link>
            <Link href='https://www.linkedin.com/in/naing-linn-phyo-768852175/' target='_blank'><Icon icon='entypo-social:linkedin-with-circle' width={30} height={30} /></Link>
            <Link href='https://telegram.me/defined_me' target='_blank'><Icon icon='ic:baseline-telegram' width={30} height={30} /></Link>
          </div>
        </div>
      </div >
      <p className='text-center text-xs'>© Copyright 2023. Made by NaingLinnPhyo</p>
    </div >
  )
}

export default Footer
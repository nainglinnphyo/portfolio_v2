import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

function BottomMail() {
    return (
        <div className='right-10 bottom-0 md:block hidden fixed z-50'>
            <div className='h-20 w-[0.125rem] bg-[#acb2bf]'>
            </div>
            <div className='absolute bottom-52 -rotate-90 -right-[7.5rem]'>
                nainglinnphyo24@gmail.com
            </div>
        </div>
    )
}

export default BottomMail
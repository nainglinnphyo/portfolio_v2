import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

function DropDownSocial() {
     return (
          <div className='left-5 top-0 md:block hidden fixed z-50 '>
               <div className='h-40 w-[0.125rem] bg-[#acb2bf]'>
               </div>
               <div className='absolute -left-3 mt-2 flex flex-col space-y-2'>
                    <Link href='https://github.com/nainglinnphyo' target='_blank' title='github'>
                         <Icon icon='mdi:github' color='#acb2bf'
                              className={`h-6 w-6`}
                         />
                    </Link>
                    <Link href='https://www.linkedin.com/in/naing-linn-phyo-768852175/' target='_blank' title='linkedin'>
                         <Icon icon='entypo-social:linkedin-with-circle' color='#acb2bf'
                              className={`h-6 w-6`}
                         />
                    </Link>
                    <Link href='https://telegram.me/defined_me' target='_blank' title='telegram'>
                         <Icon icon='ic:baseline-telegram' color='#acb2bf'
                              className={`h-6 w-6`}
                         />
                    </Link>
                    <Link href='https://instagram.com/naing_linnphyo' target='_blank' title='instagram'>
                         <Icon icon='ri:instagram-line' color='#acb2bf'
                              className={`h-6 w-6`}
                         />
                    </Link>
               </div>
          </div>
     )
}

export default DropDownSocial
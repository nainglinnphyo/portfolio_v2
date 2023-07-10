import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

function DropDownSocial() {
     return (
          <div className='left-5 top-0 md:block hidden fixed z-50 '>
               <div className='h-48 w-[0.08rem] bg-[#acb2bf]'>
               </div>
               <div className='absolute -left-4 mt-3 flex flex-col space-y-2'>
                    <Link href='https://github.com/nainglinnphyo' target='_blank'>
                         <Icon icon='mdi:github' color='#acb2bf'
                              className={`h-8 w-8`}
                         />
                    </Link>
                    <Link href='https://www.linkedin.com/in/naing-linn-phyo-768852175/' target='_blank'>
                         <Icon icon='entypo-social:linkedin-with-circle' color='#acb2bf'
                              className={`h-8 w-8`}
                         />
                    </Link>
                    <Link href='https://telegram.me/defined_me' target='_blank'>
                         <Icon icon='ic:baseline-telegram' color='#acb2bf'
                              className={`h-8 w-8`}
                         />
                    </Link>
               </div>
          </div>
     )
}

export default DropDownSocial
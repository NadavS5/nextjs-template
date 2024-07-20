import React from 'react'
import Link from 'next/link'
import ProfileMenu from './ProfileMenu'

export default function Navbar() {
  return (
    <div className="my-2 flex flex-row gap-5 items-center justify-between w-full lg:w-[80%] mx-auto">

            <div>
                <img src="main_logo.svg" alt="main logo" className='' />
            </div>
            <div className=' flex flex-row mx-2 gap-4'>
                <Link href={'protected'}>Explore</Link>
                
                <ProfileMenu/>
            </div>
    </div>
  )
}

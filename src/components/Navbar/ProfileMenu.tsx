"use client"
import { space } from 'postcss/lib/list'
import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import Link from 'next/link';




function Menu() {
  const {data : session} =  useSession();
  if (session) {
    return(
      <menu role='dialog' className=' absolute rounded-xl border-gray-300 border-[1px] p-1 px-3'>
        <ul className='flex flex-col'>
          <li className=''><Link href={'/profile'} > My Account</Link></li>
          <li><button onClick={() => signOut()} >Log Out</button></li>
        </ul>
        
      </menu>
    )
  }
  return (
      <menu className='w-fit translate-x-[-30%] absolute rounded-xl border-gray-300 border-[1px] p-1 px-3'>
        <ul className='flex flex-col'>
           <li><button onClick={() => signIn()} >Log In</button></li>
        </ul>
      </menu>

  ) 
}

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (

  <div className='select-none'>
     <span onClick={() => setIsOpen(!isOpen)} className="scale-150 material-symbols-outlined cursor-pointer">
        account_circle
    </span>
    
    {isOpen &&
      <Menu   />
    }
    
  </div>

   

  )
}

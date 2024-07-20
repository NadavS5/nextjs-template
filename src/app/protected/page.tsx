import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React, { EventHandler, FormEventHandler } from 'react'

import {Modal,ModalButton} from '@/components/Modal'
import { PopUp, showPopUp , PopUpButton} from '@/components/PopUp';
import { futimes } from 'fs';



function handlePopup() {
  'use client'
  showPopUp('test')
}

async function handleSubmit(e : FormData) {
  'use server'
  console.log(e)
}

export default async function Profile() {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }


  // create all blogs list 
  return (
    <>
      
      <div className='mx-auto'>
        Hello {session.user.name}
      </div>
      
    </>
    
  )
}

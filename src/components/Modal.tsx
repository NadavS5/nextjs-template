"use client"
import React, { Children, useEffect } from 'react'

type ModalProps = {
  children : React.ReactNode
  id : string
  animation? : 'open'|'both'
}


export function showModal(id:string) {
  const modal = document.getElementById(`modal-${id}`)
  if(modal ===null ) {
    console.log("please create a modal first")
    return
  }
  
  const modalInner = document.getElementById(`modalInner-${id}`)
  //@ts-ignore
  modal.style.display = "flex"
  requestAnimationFrame(() => {
    modalInner?.classList.add("showModal")
    
  });
  
}

function hideModal(id : string,animation? : 'open' | 'both') {
  const modal = document.getElementById(`modal-${id}`)
  if(modal ===null ) {
    console.log("please create a modal first")
  }
  
  console.log(id)
  const modalInner = document.getElementById(`modalInner-${id}`)
  requestAnimationFrame(() => {
    
    modalInner?.classList.remove("showModal")
    
  });
  modalInner?.addEventListener('transitionend', () => {
     //@ts-ignore
    modal.style.display = "none"
  } ,{once : true})
  

  if(animation) {
    if('both') {
      //@ts-ignore
      modalInner.addEventListener('transitionend' ,()=> {
        //@ts-ignore
        modal.style.display = "none"
      },{once : true})
    }else {
      //@ts-ignore  
      modal.style.display = "none"
    }
    return
  }
  //@ts-ignore
  modal.style.display = "none"
  
}


export function Modal({children,id,animation} : ModalProps ) {

  useEffect(() => {
    
    const modal = document.getElementById(`modal-${id}`)
    console.log(modal)
    return () => {
      window.addEventListener('click', 
      function(event) {
        if (event.target == modal) {
          
          //modal.style.display = "none";
          hideModal(id,animation)
        }
      })
    }
  }, [])
  
  return (
    <div style={{display:"none", position:"fixed",}} id={`modal-${id}`} className='duration-150 fixed w-full h-full z-1 left-0 top-0 bg-opacity-20  bg-gray-700 flex flex-col justify-center  items-center'>
      <div id={`modalInner-${id}`} className='scale-0  duration-150 p-5 mx-auto w-[90%] h-[90%]  lg:h-[50%] lg:w-[30%] bg-gray-200 left-0 right-0 shadow-2xl rounded-3xl'>
        {children}
      </div>
      
    </div>
  )
}


 type ModalButtonProps= {
  className? : string
  value : string
  id : string
}

export function ModalButton({className,value,id} : ModalButtonProps) {
  return (
    <button onClick={() =>  showModal(id)} className={className}> {value}</button>
  )
}

"use client"
import React, { useState } from 'react'



type PopUpProps= {
    text : string
}


//popUpNotShown
//showPopUp
export function showPopUp(text : string) {
    

    const popUp = document.getElementById("popup")
    const h1 = document?.getElementById('popUpText')
    console.log(h1?.children)
    
    if(popUp ===null ) {
      console.log("please create a modal first")
      return
    }
    if(popUp.classList.contains('active')) {
        return
    }
   
    popUp.style.display = "block"
    requestAnimationFrame(() => {
        
        
        popUp.classList.add("active")
        
    });
    setTimeout(() =>
    {
        hidePopUp();
        
    },1000)
    
  }
  
export  function hidePopUp() {
    const popUp = document.getElementById("popup")
    
    
   
    
    requestAnimationFrame(() => {
      
        popUp?.classList.remove("active")
       // popUp?.classList.add("popUpNotShown")
    });
    popUp?.addEventListener('transitionend', () => {
       
       popUp.style.display = "none"
    } ,{once : true})
    
    
  }
  

export function PopUpButton() {
    
    return (<button onClick={() => showPopUp('Pop Up')}>Show Pop Up</button>)
}
export function PopUp({text} : PopUpProps) {
    
   
  return (
                              
    <div id='popup' className='select-none -z-1 PopUp fixed ml-[50%] translate-x-[-50%] bg-white shadow-black rounded-xl w-fit p-2'>
        <div className='flex flex-row justify-center items-center'>
        <span className=" text-green-600 material-symbols-outlined">
            check
        </span>
        <h1 id='popUpText'>{text}</h1>
        </div>
        
    </div>
  )
}

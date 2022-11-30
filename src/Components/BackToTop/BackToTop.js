import React from 'react'
import { TbArrowBigUpLines } from "react-icons/tb"

const BackToTop = () => {
    window.addEventListener("scroll", function() {
        const backToTop = document.querySelector(".back-to-top");
        if (this.scrollY >= 560) backToTop.classList.add("show-back-to-top");
        else backToTop.classList.remove("show-back-to-top");
    })
  return (
   <a href="#" className='back-to-top'>
    < TbArrowBigUpLines className='back-to-top-icon' />
   </a>
  )
}

export default BackToTop
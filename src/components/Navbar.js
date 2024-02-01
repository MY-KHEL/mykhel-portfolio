import React, { useState } from 'react';
import { motion } from 'framer-motion';
const mainAnimation ={
  initial: {x:-200,
      opacity:0
  },
  animate:{
      x:10,
     opacity:1 ,
     transition:{
      delay:0.5,
     }
}
}
const Navbar = ({theme , handleTheme}) => {

const [isOpen,setIsOpen] = useState(false)

const handleMenu =()=>{

    setIsOpen(!isOpen)

}
    return ( 
        <>
        <nav className=' p-1 md:px-6 pt-3  flex justify-between items-center dark:text-white'>
           <motion.span className='md:basis-1/4 p-2 text-start'> MyKhel
           <svg
           variants={{mainAnimation}}
           initial="initial"
           animate="animate"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>

         </motion.span>

           {/* For  Mobile Screen */}
           <div className='md:basis-1/2 flex md:hidden justify-between py-2 px-6  dark:text-white dark:bg-slate-900 bg-white
           shadow-md items-center rounded-full'>

<div class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex w-full justify-center items-center gap-x-2 dark:text-black px-3 py-2 text-lg font-semibold text-gray-900  " id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleMenu}>
     Menu
     {isOpen ?
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" -mr-1 w-4 h-4  text-gray-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
}
    </button>
  </div>

{isOpen &&
  <div class="absolute -left-10 z-10 mt-4 w-56 origin-top-right  rounded-md dark:text-black dark:bg-slate-900 bg-white shadow-lg ring-1 ring-black  " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
     
      <a href="." className=" font-semibold block px-4 py-2" role="menuitem" tabindex="-1" id="menu-item-0">Home</a>
      <a href="#about" className=" font-semibold block px-4 py-2 " role="menuitem" tabindex="-1" id="menu-item-1">About Me</a>
 
      <a href="#projects" className=" font-semibold block px-4 py-2" role="menuitem" tabindex="-1" id="menu-item-2">Projects</a>
      <a href="mykhel_cv.pdf" target="_blank"  download className=" font-semibold block px-4 py-2 " role="menuitem" tabindex="-1" id="menu-item-3">Resume</a>
    </div>
   
  </div>}

</div>


           </div>
           {/* For Tablet to Laptop Screen */}
        <div className='md:basis-1/2 hidden md:flex justify-between py-4 px-8  dark:text-black dark:bg-slate-900 bg-white ring-1 dark:ring-white ring-black shadow-md items-center rounded-full'>
             <a href=".">Home</a>
             <a href="#about">About</a>
             <a href="#projects">Projects</a>
             <a href="mykhel_cv.pdf" target="_blank"  download>Resume</a>

        </div>

        <span className='md:basis-1/4  px-4 py-2 text-end'>
            <button className='px-4 rounded-md py-2  ' onClick={handleTheme}>
                {theme === "dark"?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
 :
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
}
</button>

        </span>
        </nav>
        </>
     );
}
 
export default Navbar;
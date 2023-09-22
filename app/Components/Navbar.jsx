import React from 'react'
import { BiSearchAlt } from "react-icons/Bi";
import { BiMenuAltRight } from "react-icons/Bi";
import { BiSolidLike } from "react-icons/Bi";
import { GiHamburgerMenu } from "react-icons/Gi";



function Navbar() {
    return (
        <div className='w-[100vw] min-h-[10vh] bg-black flex justify-between items-center ' >
            <div id="NavbarHeading" className='min-w-[20%] min-h-[100%] flex items-center justify-center font-[Anurati] tracking-[0.5vh]  '>
                <h1 className='text-white text-[2.2vw] cursor-pointer'>Pix Haven</h1></div>
            <div id="searchBar" className='min-w-[50%] h-[100%]  flex justify-end '>
                <form action="" className='w-[100%] min-h-[100%] flex  items-center justify-center '>
                    <input type="text" name='search'  placeholder='Search...' className='w-[100%] min-h-[100%] relative rounded-[1vh] outline-0 pl-[1vh]  text-[3vh]' />
                    <button className='absolute w-[2%] min-h-[7%] right-[28%]'>  <BiSearchAlt className='text-[2vw] ' />  </button>
                </form>
            </div>
            <div id="options" className='w-[25%] h-[100%]  flex justify-around items-center '>
                <div id="option1" className='text-[2.5vh] cursor-pointer uppercase  tracking-[0.2vh] text-white '>Category </div>
                <div id="option2"> <BiSolidLike className='text-[2.5vh]  text-white cursor-pointer ' /></div>
                <div id="option3"><GiHamburgerMenu className='text-[2.5vh]  text-white cursor-pointer' /></div>


            </div>
        </div>
    )
}

export default Navbar

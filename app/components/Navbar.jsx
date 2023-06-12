"use client"

import Link from 'next/link'
import { useState } from 'react'
import {FaBars, FaTimesCircle} from "react-icons/fa"

const Navbar = () => {
  
  const [navbar, setNavbar] = useState( false )

  return (
    <nav className="max-w-[1920px] m-auto bg-black text-white fixed top-0 right-0 left-0 z-10">
        <div className="justify-between mx-auto md:flex md:items-center md:px-8 lg:max-w-6xl lg:px-4"> 
            <div className="flex justify-between items center px-4 py-3 md:py-6 md:px-0">
                <Link href="/">
                    <h2 className="text-3xl text-[var(--primar-color)] font-bold uppercase md:text-2xl">Snacky</h2>
                </Link>
                <div className="md:hidden">
                    <button className="p-2 rounded-md outline-none text-2xl text-[var(--secondary-color)]" onClick={ () => setNavbar( !navbar )}>
                    {navbar ? <FaTimesCircle /> : <FaBars /> }
                    </button>
                </div>
            </div>

            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? 'p-5 mt-0 md:p-0 block' : 'hidden'}`}>
            <ul className='h-screen justify-end items-center md:h-auto md:flex border-t-[3px] md:border-none'>
                <li className='text-left p-3 uppercase font-bold lg:text-[18px] md:text-[16px] md:px-2 hover:text-[var(--secondary-color)] cursor-pointer'>
                    <Link href="https://en.wikipedia.org/wiki/Insects_as_food" target='_blank' onClick={ () => setNavbar( !navbar )}>Insects as Food</Link>
                </li>

                <li className='text-left p-3 uppercase font-bold lg:text-[18px] md:text-[16px] md:px-2 hover:text-[var(--secondary-color)] cursor-pointer'>
                    <Link href="/#ikea" onClick={ () => setNavbar( !navbar )}>IKEA's Insect Burger</Link>
                </li>

                <li className='text-left p-3 uppercase font-bold lg:text-[18px] md:text-[16px] md:px-2 hover:text-[var(--secondary-color)] cursor-pointer'>
                    <Link href="https://www.jiminis.com/shop/lang/en/" target='_blank' onClick={ () => setNavbar( !navbar )}>Shop</Link>
                </li>

                <li className='text-left p-3 uppercase font-bold lg:text-[18px] md:text-[16px] md:px-2 hover:text-[var(--secondary-color)] cursor-pointer'>
                    <Link href="/contact" onClick={ () => setNavbar( !navbar )}>Contact Us</Link>
                </li>


            </ul>

        </div>
        </div>
    </nav>
  )
}

export default Navbar
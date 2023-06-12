import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
      <div className="h-[500px] flex justify-center items-center relative bg-center bg-cover hero-bg-image sm:h-[500px] md:h-[700px] lg:h-[1000px]">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]"></div>
          <div className="py-5 text-white z-[3]">
              <Link href="https://bugbakes.co.uk/products" target='_blank'>
                  <button className="px-16 py-4 border uppercase rounded-full bg-[var(--secondary-color)] border-none text-white font-bold hover:opacity-90 text-1xl md:text-2xl">order free samples</button>
              </Link>
          </div>
      </div>
  )
}
export default Hero

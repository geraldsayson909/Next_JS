import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from 'next/link'

const Featured = () => {
  return (
    <div className="grid grid-cols1 md:grid-cols-10 md:gap-2 py-8">
        <div className="md:col-span-6 text-center py-5">
            <span className="font-bold text-1xl text-[#555]">SNACKY'S FEATURED PRODUCT</span>
            <img className="w-[70%] m-auto md:mx-auto py-8" src="https://www.jiminis.com/wp-content/uploads/2020/12/Jiminis_logo-1.svg" alt="logo" />
            <h1 className="text-[#333] text-2xl font-bold lg:text-3xl pt-8 text-center">Grasshopers Dessert</h1>
            <p className="uppercase py-3 font-bold text-1xl text-center">cocoa</p>
            <p className="py-3 font-bold text-1xl text-center">$6.95</p>
            <Link href="https://www.jiminis.com/shop/lang/en/insect-snacks/248-grasshoppers-edible-insects-3770004159062.html" target="_blank">
              <button className="font-bold pt-4 rounded inline-flex items-center">
                <span className="mr-3 text-2xl text-[var(--secondary-color)] uppercase">order now</span>
                <BsFillArrowRightCircleFill className="text-3xl"/>
              </button>
            </Link>
        </div>
        <div className="md:col-span-4 text-center py-5">
            <div className="flex items-center justify-center">
              <img className="w-full" src="https://cdn3.jiminis.com/shop/lang/1201-large_default/edible-grasshopers-cocoa.jpg" alt="grasshoppers and cocoa" />
            </div>
        </div>
    </div>
  )
}

export default Featured

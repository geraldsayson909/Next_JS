import Link from 'next/link'
import Image from 'next/image'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


const Mealworm = () => {
  return (
    <section id="ikea" className='mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='flex justify-center items-center'>
                <h2 className='text-[var(--primary-color)] text-3xl font-bold mb-5 md:mb-0'>IKEA's Insect Burger</h2>
            </div>

            <div className='flex justify-center overflow-hidden'>
                <Image
                className='w-[80%] rounded-xl'
                    src="https://hips.hearstapps.com/hmg-prod/images/maggotburg-1520884848.jpg?crop=0.6889894419306184xw:1xh;center,top&resize=1200:*"
                    width={500}
                    height={500}
                    alt="IKEA's Insect Burger"
                />
            </div>

            <div className='flex justify-center items-center md:col-span-2 lg:col-span-1'>
                <div className='px-5 w-full h-full flex flex-col justify-evenly text-center'>
                    <div>
                        <p className='font-bold text-2xl my-10'>"The Future of Fast Food Might Be Mealworm Burgers"</p>
                    </div>

                    <div>
                        <Link href='https://www.refinery29.com/en-gb/best-insect-snacks-small-giants-crunchy-critters' target='_blank'>
                            <button className='font-bold rounded inline-flex'>
                                <span className='mr-2 text-1xl text-[#555] uppercase'>read SADHBH O'SULLIVAN's article</span>
                                <BsFillArrowRightCircleFill  className='text-2xl'/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mealworm
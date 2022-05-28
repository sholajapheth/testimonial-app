import React from 'react'
import heroTestimonialImage from "../resources/images/heroTestimonialImage.png"
import lineVector from "../resources/images/lineVector.svg"
import Container from './helpers/Container'
import { motion } from 'framer-motion'

const HeroTestimonial = () => {
    return (
        <section className='flex flex-col  items-center '>
            <Container>
                <div className='w-full display flex md:flex-row  sm:gap-1 flex-col items-center justify-between my-[5rem]'>
                    <div className=' '>
                        <div className='overflow-hidden flex items-center relative w-full'>
                            <span className='absolute m-auto w-[631px] h-[631px] top-[2px] rounded-full bg-[#2E2E2E] '>
                            </span>
                            <img className='relative md:w-[80%] m-auto' src={heroTestimonialImage} alt="hero section" />
                        </div>
                    </div>

                    <div className='md:w-[60%]  md:ml-[6rem] md:mt-0 mt-10'>
                        <div className='flex flex-col gap-12'>

                            <div>
                                <p className='font-inter font-[700] text-[32px] text-white'>Tolu & Joy’s Experience</p>
                                <button className='rounded-md text-[13px] font-[500] font-inter text-white border-2 border-gray-300 py-1 px-2'>CUSTOMER</button>
                            </div>
                            <p className='text-white text-[18px]'>
                                I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='cursor-pointer'
                            >
                                <p className='text-[18px] text-white '>SHARE YOUR OWN STORY!</p>
                                <img src={lineVector} alt="line" />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroTestimonial
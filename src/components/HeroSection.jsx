import React from 'react'
import Container from './helpers/Container'
import heroImage from "../resources/images/heroImage.png"

const HeroSection = () => {
    return (
        <section className='flex flex-col mt-10 items-center '>
            <Container>
                <div className='w-full display flex md:flex-row gap-10 sm:gap-1 flex-col items-center justify-between'>
                    <div className='font-inter bg-transparent md:w-[42%]'>
                        <p className='font-[700] text-[32px] md:text-[48px]'>
                            Amazing
                            Experiences from Our Wonderful Customers
                        </p>

                        <p className='font-[400] text-[18px]'>
                            Here is what customers and vendors are saying about us, you can share your stories with us too.
                        </p>
                    </div>
                    <div className='md:w-[58%]'>
                        <div className='overflow-hidden flex items-center relative '>
                            <span className='absolute m-auto w-full h-[711px] top-[60px] rounded-full bg-[#FFF8F5]'>

                            </span>
                            <img className='relative md:w-[80%] m-auto' src={heroImage} alt="hero section" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroSection
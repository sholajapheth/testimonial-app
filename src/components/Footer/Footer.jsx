import React from 'react'
import BottomFooter from './BottomFooter'
import TopFooter from './TopFooter'


const Footer = () => {
    return (
        <section className='bg-[#25201D] w-full mt-[8rem] flex flex-col items-center'>

            <div className='md:w-[70%] w-[90%]' >
                <TopFooter />
                <BottomFooter />
            </div>

        </section>
    )
}

export default Footer
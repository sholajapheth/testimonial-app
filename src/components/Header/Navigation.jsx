import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi"
import { GrClose } from "react-icons/gr"
import { motion } from "framer-motion";
import Container from '../helpers/Container'
import vasiti from '../../resources/images/vasiti.svg'

const links = [
    { id: 1, name: "ABOUT US", link: "/" },
    { id: 2, name: "STORIES", link: "/" },
    { id: 3, name: "CONTACT", link: "/" },
    { id: 4, name: "LOGIN", link: "/" },
    { id: 5, name: "SIGNUP", link: "/", extra: true },
]
const serviceList = [
    { name: "MARKET PLACE", link: '/' },
    { name: "WHOLESALE CENTER", link: '/' },
    { name: "SELLER CENTER", link: '/' },
    { name: "SERVICES", link: '/' },
    { name: "INTERNSHIP", link: '/' },
]


const Navigation = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => (
        setNav(!nav)
    )


    return (

        <Container>
            <div className='w-full py-5 mb-5 hidden  md:flex flex-row justify-between md:items-center'>
                <div >
                    <img className='cursor-pointer' src={vasiti} alt="Vasiti logo" />
                </div>
                {/* desktop */}
                <div className=''>
                    {links.map((link) => (
                        <motion.button
                            key={link.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`px-5 py-2 rounded-md text-[13px] font-inter font-[400]
                             ${link.extra ? "bg-[#ff5c00] text-white" : ''}`}>{link.name}
                        </motion.button>
                    ))}

                </div>


            </div>




            {/* mobile */}

            <div className='w-full py-5 mb-5 flex flex-col  md:hidden md:flex-row justify-between md:items-center '>
                <div className='flex flex-row justify-between'>
                    <div >
                        <img className='cursor-pointer' src={vasiti} alt="Vasiti logo" />
                    </div>
                    {!nav ? <HiOutlineMenu className='text-[2rem]' onClick={handleClick} /> : <GrClose className='text-[2rem]' onClick={handleClick} />
                    }
                </div>

                {nav && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}

                    >
                        <div className='flex-col flex items-center mt-8'>
                            {links.map((link) => (
                                <motion.button
                                    key={link.id}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`px-5 py-2 rounded-md text-[13px] font-inter font-[400]
                             ${link.extra ? "bg-[#ff5c00] text-white sm:w-[10rem]" : ''}`}>{link.name}
                                </motion.button>
                            ))}
                        </div>

                        <div className='w-full flex-col justify-around mt-5 border-t-4 shadow-inner '>
                            {
                                serviceList.map((service) => (
                                    <motion.p
                                        key={service.name}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='text-[13px] font-inter font-[400] cursor-pointer py-2 text-center'>{service.name}</motion.p>
                                ))
                            }
                        </div>
                    </motion.div>
                )}






            </div>
        </Container >
    )
}

export default Navigation
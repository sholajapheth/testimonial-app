import React from 'react';
import { motion } from "framer-motion";
import Container from '../helpers/Container'

const serviceList = [
    { name: "MARKET PLACE", link: '/' },
    { name: "WHOLESALE CENTER", link: '/' },
    { name: "SELLER CENTER", link: '/' },
    { name: "SERVICES", link: '/' },
    { name: "INTERNSHIP", link: '/' },
]

const Services = () => {
    return (

        <Container>
            <div className='w-full justify-around py-2 shadow-inner hidden  md:flex'>
                {
                    serviceList.map((service) => (
                        <motion.p
                            key={service.name}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='text-[13px] font-inter font-[400] cursor-pointer'>{service.name}</motion.p>
                    ))
                }
            </div>
        </Container>

    )
}

export default Services
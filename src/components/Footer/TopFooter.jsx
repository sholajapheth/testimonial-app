import React from 'react'
import phone from '../../resources/images/phone.png'

const TopFooter = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col justify-between  items-center w-full lg:gap-[10rem] ' >


                <div className=' '>
                    <img className='relative -top-10 ' src={phone} alt="phone" />
                </div>


                <div className='flex flex-col gap-4 md:w-[50%]'>
                    <p className='font-inter font-[700] text-[40px] text-white'> Be a  member of our community 🎉</p>
                    <p className='font-roboto font-[400] text-[14px] text-white'>
                        We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.
                    </p>
                    <div className='flex items-center '>
                        <input placeholder='enter your email address' type="email" className=' h-[3rem] pl-2 rounded-md text-white  bg-white w-[368px]' />
                        <button className='text-[13px] bg-gray-300 rounded-md px-2 py-2  -ml-[5rem] shadow-md'>SUSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFooter
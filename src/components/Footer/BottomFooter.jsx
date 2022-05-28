import React from 'react'
import facebook from "../../resources/images/facebook.svg"
import instagram from "../../resources/images/instagram.svg"
import twitter from "../../resources/images/twitter.svg"
import linkedin from "../../resources/images/linkedin.svg"

const BottomFooter = () => {
    return (
        <div className='flex md:flex-row flex-col gap-10  justify-between my-[4rem]'>
            {/* -----------------------------------------1-------------------------- */}
            <div className='flex flex-row gap-12'>
                <div className='text-white flex flex-col gap-4'>
                    <p className='font-roboto font-700 text-[16px]'>Company</p>
                    <p className='font-roboto font-400 text-[14px]'>About Us</p>
                    <p className='font-roboto font-400 text-[14px]'>Term of Use</p>
                    <p className='font-roboto font-400 text-[14px]'>Privacy Policy</p>
                    <p className='font-roboto font-400 text-[14px]'>Press & Media</p>
                </div>
                <div className='text-white flex flex-col gap-4'>
                    <p className='font-roboto font-700 text-[16px]'>Products</p>
                    <p className='font-roboto font-400 text-[14px]'>Marketplace</p>
                    <p className='font-roboto font-400 text-[14px]'>Magazine</p>
                    <p className='font-roboto font-400 text-[14px]'>Seller</p>
                    <p className='font-roboto font-400 text-[14px]'>Wholesale</p>
                    <p className='font-roboto font-400 text-[14px]'>Services</p>
                </div>

            </div>

            {/* ------------------------- 2----------------------------------- */}
            <div className='flex flex-row gap-12'>
                <div className='text-white flex flex-col gap-4'>
                    <p className='font-roboto font-700 text-[16px]'>Careers</p>
                    <p className='font-roboto font-400 text-[14px]'>Become a Campus Rep</p>
                    <p className='font-roboto font-400 text-[14px]'>Become a Vasiti Influencer</p>
                    <p className='font-roboto font-400 text-[14px]'>Become a Campus Writter</p>
                    <p className='font-roboto font-400 text-[14px]'>Become an Affiliate</p>
                </div>
                <div className='text-white flex flex-col gap-4'>
                    <p className='font-roboto font-700 text-[16px]'>Get in touch</p>
                    <p className='font-roboto font-400 text-[14px]'>Contact Us</p>
                    <p className='font-roboto font-400 text-[14px]'>Partner with Us</p>
                    <p className='font-roboto font-400 text-[14px]'>Advertise with Us</p>
                    <p className='font-roboto font-400 text-[14px]'>Help/FAQs</p>
                </div>

            </div>

            {/* ---------------------------- 3---------------------- */}
            <div className='flex flex-row gap-12'>
           
                <div className='text-white flex flex-col gap-6'>
                    <p className='font-roboto font-700 text-[16px]'>Join Our Community</p>
                    <div className='flex gap-4'>
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                    <p className='font-roboto font-400 text-[14px]'>Email Newsletter</p>

                </div>

            </div>

        </div>
    )
}

export default BottomFooter
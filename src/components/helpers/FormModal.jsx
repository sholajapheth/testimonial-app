import React from 'react'
import "./formmodal.css"
import { useForm } from "react-hook-form";
import attach from '../../resources/images/attach.svg'
import close from '../../resources/images/close.svg'
import { motion } from 'framer-motion';


const FormModal = (props) => {
    const { register, watch, reset, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const watchImage = watch("image", false)

    const handleClick = () => (

        watchImage && reset({ image: "" })

    )

    return (
        <div className='fixed w-full h-full bg-slate-100 z-[999] opacity-90'>

            <div className='flex flex-col items-center '>
                <div className='rounded-md bg-white mt-[2rem] p-5'>
                    <div className='mb-5'>
                        <p className='font-inter font-[700] text-[28px] mt-[2rem]'>Share Your Amazing Story</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className='flex flex-col gap-3'>
                                    <label htmlFor="image">Upload Your picture</label>
                                    <div className='flex  '>
                                        <input
                                            {...register("image", { required: true })}
                                            type="file" id="file" className="p-3  rounded-md w-full border-2 border-[#eaeaea] bg-[#fefefe]" />
                                        <img className='relative -ml-9 ' src={!watchImage ? attach : close} alt="attach" onClick={handleClick} />
                                    </div>
                                </div>

                            </div>

                            <div className='mt-[1rem]'>
                                <label htmlFor="firstName"> First Name</label>
                                <input className=' w-full p-3 border-2 border-[#eaeaea] bg-[#fefefe] rounded-md'
                                    {...register("firstName", { required: true, maxLength: 20 })} placeholder='first name' />

                            </div>
                            <div className='mt-[1rem]'>
                                <label htmlFor="lastName"> Last Name</label>
                                <input className=' w-full p-3 border-2 border-[#eaeaea] bg-[#fefefe] rounded-md'
                                    {...register("lastName", { required: true, maxLength: 20 })} placeholder='last name' />

                            </div>
                            <div className='mt-[1rem]'>
                                <label htmlFor="story"> Share your Story</label>
                                <textarea className=' w-full p-3 border-2 border-[#eaeaea] bg-[#fefefe] rounded-md'
                                    {...register("story", { required: true })} placeholder='Share Your Story...' />

                            </div>
                            <div className='flex gap-[3rem] mt-[1rem]'>
                                <p>What did you interact with Vasiti as?</p>
                                <div className='flex gap-2 mb-2'>

                                    <div className='flex gap-1 items-center'>
                                        <input type="radio" className=' p-3 border-2 border-[#eaeaea] bg-[#fefefe] rounded-md'
                                            {...register("customer")} placeholder='last name' />

                                        <label htmlFor="lastName"> Customer</label>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <input type="radio" className=' p-3 border-2 border-[#eaeaea] bg-[#fefefe] rounded-md'
                                            {...register("customer")} placeholder='last name' />

                                        <label htmlFor="lastName"> Customer</label>
                                    </div>
                                </div>
                            </div>
                            <p>City or Higher Institution (for Students)</p>

                            <div
                                onClick={props.handleClick}
                                className='flex flex-col  items-center w-full'>
                                <motion.input
                                    whileTap={{ scale: 0.9 }}
                                    whileHover={{ scale: 1.1 }}
                                    type="submit" className='px-10 py-2 rounded-md text-[18px] font-roboto font-[700] bg-[#ff5c00] mt-[1rem] text-white' />

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormModal
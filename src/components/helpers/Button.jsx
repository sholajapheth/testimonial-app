import React from 'react'

const Button = (props) => {


    return (
        <button
            className={`rounded-md text-[13px] font-[500] font-inter 
        ${props.text === "VENDOR" ? " text-[#049A01] bg-[#F0FFEE] " : "text-[#0D019A] bg-[#EEF8FF]"} py-1 px-2 shadow-sm`}>{props.text}</button>
    )
}

export default Button
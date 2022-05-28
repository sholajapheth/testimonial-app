
import React from 'react'

const Container = (props) => {
    return (
        <div className='md:w-[80%] w-full flex items-center px-5'>
            {props.children}
        </div>
    )
}

export default Container
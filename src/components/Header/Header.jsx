import React from 'react'
import Navigation from './Navigation'
import Services from './Services'

const Header = () => {
    return (
        <div className='flex flex-col items-center '>
            <Navigation />
            <Services />
        </div>
    )
}

export default Header
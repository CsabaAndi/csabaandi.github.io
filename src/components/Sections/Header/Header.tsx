import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className='flex  w-full items-center justify-between p-4 md:p-8'>
                        <text className='inline-flex items-center rounded-md text-xl text-white  focus:outline-none focus:ring-2 focus:ring-green-600 sm:text-3xl'>
                        <span className='mr-1'>Sziaaaa</span>
                        <span className='font-bold'>Mia</span>
                        </text>
        </div>
        )
}

export default Header;
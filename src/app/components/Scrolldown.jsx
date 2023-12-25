"use client";
import React from 'react'
import Link from 'next/link';


const Scrolldown = () => {
    return (
        <div className='h-fit'>
            <div className='text-center space-y-2'>
            <Link className='text-2xl font-extrabold' href="#about">Scroll Down
            <svg className='mx-auto' width="80" height="100" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2187 0.181824H14.4176V29.2102L3.31959 18.1122L0.0326538 21.4361L16.8182 38.2216L33.6406 21.4361L30.2798 18.1122L19.2187 29.2102V0.181824Z" fill="#181717" />
            </svg>
            </Link>
            </div>
        </div>
    )
}

export default Scrolldown
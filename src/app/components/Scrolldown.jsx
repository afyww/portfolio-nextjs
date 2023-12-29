import React from 'react'
import Link from 'next/link';


const Scrolldown = () => {
    return (
        
        <div className='h-fit flex justify-center'>
            <Link href="#about">
            <svg className='mx-auto w-32 h-32' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15L20 25L30 15" stroke="#E3E4E6" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Link>

        </div>
    )
}

export default Scrolldown
import React from 'react';
import Link from 'next/link';

const Scrolldown = () => {
  return (
    <div className='flex justify-center'>
      <Link href="#about">
        <svg className='mx-auto w-20 h-20' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15L20 25L30 15" stroke="#E3E4E6" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
};

export default Scrolldown;

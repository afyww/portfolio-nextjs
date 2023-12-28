import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projectcard = () => {
  return (
    <div class="space-y-4 xl:mx-auto xl:my-auto">
      <div>
        <ul className='flex justify-center space-x-8'>
          <li className='text-white rounded-sm p-2 border'><a className='hover:underline hover:text-black' href="">All</a></li>
          <li className='text-white rounded-sm p-2 border'><a className='hover:underline hover:text-black' href="">Crud</a></li>
          <li className='text-white rounded-sm p-2 border'><a className='hover:underline hover:text-black' href="">Landing</a></li>
        </ul>
      </div>
      <div class="grid grid-cols-2 gap-8 overflow-y-scroll h-96 text-white p-8 bg-gray-700">
        <div className='space-y-3 rounded-sm'>
          <Image className='transition-transform ease-linear duration-300 transform hover:scale-110 rounded-sm' src="/images/Dinkes-Project.png" width={300} height={300} alt='' />
          <h1 className='font-semibold text-2xl'>Information System</h1>
          <p className='text-left font-light line-clamp-2 max-w-xs'>Information system work letter for Dinas Kesehatan
            Kota Semarang .Feature see the graph of work letter and employee CRUD .Build with laravel,tailwind and mysql .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .
          </p>
        </div>
        <div className='space-y-3 rounded-sm'>
          <Image className='transition-transform ease-linear duration-300 transform hover:scale-110 rounded-sm' src="/images/Portfolio.png" width={300} height={300} alt='' />
          <h1 className='font-semibold text-2xl'>Portfolio Website</h1>
          <p className='text-left font-light line-clamp-2 max-w-xs'>Portfolio website include animations .Build with nextjs,tailwind and npm library .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .
          </p>
        </div>
        <div className='space-y-3 rounded-sm'>
          <Image className='transition-transform ease-linear duration-300 transform hover:scale-110 rounded-sm' src="/images/Dinkes-Project.png" width={300} height={300} alt='' />
          <h1 className='font-semibold text-2xl'>Information System</h1>
          <p className='text-left font-light line-clamp-2 max-w-xs'>Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .
          </p>
        </div>
        <div className='space-y-3 rounded-sm'>
          <Image className='transition-transform ease-linear duration-300 transform hover:scale-110 rounded-sm' src="/images/Dinkes-Project.png" width={300} height={300} alt='' />
          <h1 className='font-semibold text-2xl'>Information System</h1>
          <p className='text-left font-light line-clamp-2 max-w-xs'>Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .
          </p>
        </div>
        <div className='space-y-3 rounded-sm'>
          <Image className='transition-transform ease-linear duration-300 transform hover:scale-110 rounded-sm' src="/images/Dinkes-Project.png" width={300} height={300} alt='' />
          <h1 className='font-semibold text-2xl'>Information System</h1>
          <p className='text-left font-light line-clamp-2 max-w-xs'>Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .
          </p>
        </div>
        <div className='space-y-3 rounded-sm'>
          <Image className='transition-transform ease-linear duration-300 transform hover:scale-110 rounded-sm' src="/images/Dinkes-Project.png" width={300} height={300} alt='' />
          <h1 className='font-semibold text-2xl'>Information System</h1>
          <p className='text-left font-light line-clamp-2 max-w-xs'>Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .Information system work letter for Dinas Kesehatan
            Kota Semarang .
          </p>
        </div>
      </div>
    </div>)
}

export default Projectcard
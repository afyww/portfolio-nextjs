import React from 'react'
import Image from 'next/image'
const Projectcard = () => {
  return (
    <div class="space-y-4 xl:mx-auto xl:my-auto">
    <div class="text-white justify-center text-sm space-y-5 p-8 bg-gray-700">
        <Image src="/images/Dinkes-Project.png" width={600} height={600} alt='' />
        <h1 className='font-semibold text-2xl'>Sistem Informasi Surat Kerja</h1>
        <p className='text-left font-light'>Sistem informasi tentang pembuatan surat kerja untuk Dinas Kesehatan
             Kota Semarang.</p>
    </div>
</div>  )
}

export default Projectcard
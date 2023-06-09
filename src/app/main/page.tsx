import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
  return (
    <div className="max-w-[1000px] mx-auto min-h-[50vh] flex items-center">
      <div className="container bg-[#23262c] drop-shadow-[0px_5px_10px_rgba(0,0,0,0.60)] mx-auto rounded-[20px] w-9/12 mt-5 px-10 py-10">
        <Image
          className='mx-auto'
          src="/logoestacio.png"
          alt="Logo"
          width={400} height={400}
        />


        <p className="text-[20px] text-center text-white mt-10">
          Projeto Front-end Com Framework e Crud</p>
        <p className="text-[20px] text-center text-white mt-2 mb-5">
          Missão Certificação - Mundo 2</p>
          <div className='text-center mt-[50px]'>
          <Link href="/team">
            <button type="button" className="bg-[#05a374] hover:bg-[#05a374]/90 focus:ring-4 focus:outline-none focus:ring-[##05a374]/50 font-medium rounded-xl text-lg px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#05a374]/30 mr-2 mb-2">Desenvolvedores</button>
          </Link>
          </div>
          
        
      </div>
    </div>

  )
}


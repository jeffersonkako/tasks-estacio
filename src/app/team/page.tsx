import React from 'react'
import Image from 'next/image';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function Team() {
  return (
    <div className="container bg-[#23262c] drop-shadow-[0px_5px_10px_rgba(0,0,0,0.60)] mx-auto rounded-[20px] max-w-[800px] mt-5 px-5 py-10 ">
      <Link href="/">
        <div className='inline-flex'>
        <FiArrowLeftCircle
        className='text-gray-300 text-[40px] hover:text-red-500 cursor-pointer ml-3' />
        <h2 className='ml-[250px] mb-10'>DEVELOPERS - TEAM 02</h2>
        </div>
        
      </Link>
      
      <div className='flex flex-wrap gap-10 ml-[80px]'>
        <div className='flex flex-col gap-4'>
          <div className="flex items-center space-x-4">
            <Image
              src="/kako.png"
              width={100}
              height={100}
              className=""
              alt="logo"
            />
            <div className="font-medium dark:text-white">
              <div>Jefferson Pessoa</div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202208291228 </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/madu.jpeg"
              width={100}
              height={100}
              className="rounded-full"
              alt="logo"
            />
            <div className="font-medium dark:text-white">
              <div>Amanda Duque</div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202209170254</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/andre.jpeg"
              width={100}
              height={100}
              className="rounded-full"
              alt="logo"
            />
            <div className="font-medium dark:text-white">
              <div>Andre Luiz</div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202208604943</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="flex items-center space-x-4">
            <Image
              src="/nelson.png"
              width={100}
              height={100}
              className="rounded-full"
              alt="logo"
            />
            <div className="font-medium dark:text-white">
              <div>Nelson Carvalho</div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202208353568</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/marcos.jpeg"
              width={100}
              height={100}
              className="rounded-full"
              alt="logo"
            />
            <div className="font-medium dark:text-white">
              <div>Marcos Barozzi </div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202211381232</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/greg.png"
              width={100}
              height={100}
              className="rounded-full"
              alt="logo"
            />
            <div className="font-medium dark:text-white">
              <div>Hemerson Gregorio </div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Matricula: 202209084986</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

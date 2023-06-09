"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'



import { useSession, signIn, signOut } from 'next-auth/react'


export default function Header() {

  const { data: session, status } = useSession()

  return (
    <>
      <div className='flex justify-between max-w-[800px] mx-auto py-[20px] px-[10px]'>
        <Link href="/" className="pointer">
          <Image
            src="/Tasks.svg"
            width={100}
            height={100}
            className=""
            alt="logo" />
        </Link>
        <div className='flex gap-2'>

          {session?.user && (
            <Link href="/todo">
              <button className="bg-transparent border hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-900 dark:hover:bg-[#24292f] mr-2 mb-2" type="button">Acessar Tarefas
              </button></Link>
          )}

          {status === 'loading' ? (
            <></>
          ) : session ? (
            <button type="button" onClick={() => signOut()} className="bg-transparent font-medium rounded-xl text-sm text-center inline-flex items-center">
              <img className='w-10 mr-2' src={`${session?.user?.image}`} alt={`${session?.user?.name}`} />
              <h2>{session?.user?.name}</h2> <FiLogOut className='ml-2 text-[20px] text-[#24292f]' />
            </button>

          ) : (
            <button
              onClick={() => signIn('google')}
              type="button"
              className="bg-[#23262c] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-xl text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
              <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Entrar com Google
            </button>
          )}
        </div>
      </div>
    </>

  )
}



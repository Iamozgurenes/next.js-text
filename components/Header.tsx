'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { usePathname } from 'next/navigation'



const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
  return (
    
    
    
    
    <div className='flex justify-between items-center'>
        
        <div className='ml-5'>Logo</div>

        <div className='flex items-center gap-24 m-5'>
            <p> <Link className={`p-3 ${pathname === "/" ? "underline" : ""}`} href="/">Home</Link> </p>
            <p> <Link className={`p-3 ${pathname === "/about" ? "underline" : ""}`} href="/about">About</Link> </p>
            <p> <Link className={`p-3 ${pathname === "/blog" ? "underline" : ""}`} href="/blog">Blog</Link> </p>
            <p> <Link className={`p-3 ${pathname === "/contact" ? "underline" : ""}`} href="/contact">Contact</Link> </p>

            <button className='p-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl shadow-lg transition duration-300' type="button" onClick={() => router.push('/auth/login')}>
              Login
            </button>


        </div>

    </div>

    

  )
}

export default Header
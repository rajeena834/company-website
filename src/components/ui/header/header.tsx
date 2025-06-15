"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

export default function Header() {
    const menuItems = [
    {
      name: "About us",
      path: "/AboutUs"
    },
    {
      name: "Brands",
      path: "/Brands"

    },
    {
      name: "Location",
      path: "/Location"

    },
    {
      name: "Impact",
      path: "/Impacts"

    }

  ]
  return (
    
<div className='px-3 py-1 flex justify-between items-center'>
        <div className='py-1 flex items-center '>
          <img className='w-auto h-12' src="https://cdn-images-1.medium.com/max/1200/1*CEC1iXf2TGEZr7O4yeaDNw.png" alt="" />
          <div className='font-bold text-3xl'>olx</div>
        </div>
        <div className='flex gap-10 items-center'>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path} className='text-1xl text-gray-600 font-bold'>
              {item.name}
            </Link>
          ))}
          <Link href="/Career">
                    <Button className='px-6 py-5 rounded-full'>Career</Button>

          </Link>

        </div>
      </div>
  )
}

















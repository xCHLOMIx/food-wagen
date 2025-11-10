import { MealInterface } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import { FaStar, FaTag } from 'react-icons/fa'
import { IoMdMore } from 'react-icons/io'
import Button from './Button'

const MealCard: React.FC<{ meal: MealInterface }> = ({ meal }) => {
  return (
    <div className='w-full flex flex-col gap-6 items-start'>
      <div className='w-full h-60 relative bg-blue-300 overflow-hidden rounded-2xl'>
        <div className='food-badge'>
          <FaTag />
          <span>${meal.Price}</span>
        </div>
        <Image src={meal.avatar} alt={meal.name} fill className="object-cover" />
      </div>
      <div className='grid grid-cols-5 gap-4 w-full items-center'>
        <div className='size-13 rounded-lg overflow-hidden relative'>
          <Image src={meal.logo} alt={meal.name} fill className="object-cover" />
        </div>
        <div className='w-full col-span-3'>
          <h6 className='font-bold truncate w-11/12 text-foreground'>{meal.name}</h6>
          <div className='flex items-center gap-2 text-xl text-secondary'>
            <FaStar className='' /><span>{meal.rating}</span>
          </div>
        </div>
        <div className='self-start place-self-end hover:bg-black/10 py-1 rounded-md cursor-pointer'>
          <IoMdMore className='size-6' />
        </div>
      </div>
      <div className={` text-lg font-bold px-3 p-1 rounded-xl ${meal.open ? "text-custom-green bg-custom-green/20": "text-primary bg-primary/20"}`}>
        {meal.open ? "Open" : "Closed"}
      </div>
    </div>
  )
}

export default MealCard
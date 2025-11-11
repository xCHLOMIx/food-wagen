import { MealInterface } from '@/lib/types'
import Image from 'next/image'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { FaStar, FaTag } from 'react-icons/fa'
import { IoMdMore } from 'react-icons/io'
import SecondaryButton from './SecondaryButton'

const MealCard: React.FC<{ meal: MealInterface }> = ({ meal }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<any>(null);
  const [popUp, setPopUp] = useState<boolean>(false);

  useEffect(() => {
    const handleClickedOutside = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickedOutside)

    return (() => {
      removeEventListener("mousedown", handleClickedOutside)
    })
  }, [])

  return (
    <div className='w-full flex flex-col gap-6 items-start'>
      <div className={`fixed left-0 z-50 ${popUp ? "flex" : "hidden"} justify-center pt-[132px] bg-[#C6C2C285] w-full h-screen top-0`}>
        <div className='bg-white w-full max-w-[564px] custom-shadow-2 rounded-[20px] h-max px-11 py-12 flex flex-col items-center'>
          <h1 className='text-tertiary text-[32px] font-bold'>Delete Meal</h1>
          <p className='text-[#9E9E9E] mt-3'>Are you sure you want to delete this meal? Actions cannot be reversed.</p>
          <div className='grid grid-cols-2 gap-3 w-full my-[18px]'>
            <SecondaryButton styles='w-full p-3 text-sm rounded-xl text-center'>
              <span className='text-center w-full font-bold'>Yes</span>
            </SecondaryButton>
            <button onClick={() => setPopUp(false)} className='food-outline-button text-sm w-full'>
              <span className='text-center w-full font-bold'>Cancel</span>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full h-60 relative overflow-hidden rounded-2xl'>
        <div className='food-badge'>
          <FaTag />
          <span>${meal.Price}</span>
        </div>
        <Image src={meal.avatar} alt={meal.name} sizes='240px' fill className="object-cover" />
      </div>
      <div className='grid grid-cols-5 gap-4 w-full items-center'>
        <div className='size-13 rounded-lg overflow-hidden relative'>
          <Image src={meal.logo} alt={meal.name} sizes='240px' fill className="object-cover" />
        </div>
        <div className='w-full col-span-3'>
          <h6 className='font-bold truncate w-11/12 text-foreground'>{meal.name}</h6>
          <div className='flex items-center gap-2 text-xl text-secondary'>
            <FaStar className='' /><span>{meal.rating}</span>
          </div>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className='self-start place-self-end relative hover:bg-black/10 py-1 rounded-md cursor-pointer'
        >
          <IoMdMore className='size-6' />
          <div ref={dropdownRef} className={`${isOpen ? "flex" : "hidden"} flex-col bg-white shadow rounded-xl p-2 mt-2 absolute z-40 right-0`}>
            <div className='pl-2 pr-3 py-1 hover:bg-gray-100 transition duration-150 rounded-lg'>Edit</div>
            <div
              onClick={() => { setPopUp(true); setIsOpen(false) }}
              className='text-red-500 pl-2 pr-3 py-1 hover:bg-red-50 transition duration-150 rounded-lg'
            >
              Delete
            </div>
          </div>
        </div>
      </div>
      <div className={`text-lg font-bold px-3 p-1 rounded-xl ${meal.open ? "text-custom-green bg-custom-green/20" : "text-primary bg-primary/20"}`}>
        {meal.open ? "Open" : "Closed"}
      </div>
    </div >
  )
}

export default MealCard
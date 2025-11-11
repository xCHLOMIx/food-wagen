"use client"
import { MealInterface } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import MealCard from './MealCard'
import SecondaryButton from './SecondaryButton'
import { PiCaretRightBold } from 'react-icons/pi'
import CardSkeleton from './CardSkeleton'
import logo from '@/public/fw.png'
import Image from 'next/image'
import { FaRegSadTear } from 'react-icons/fa'
import { BiPlus } from 'react-icons/bi'
import Button from './Button'

const MealsList: React.FC = () => {
    const [meals, setMeals] = useState<MealInterface[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch('https://6852821e0594059b23cdd834.mockapi.io/Food');
        const data = await response.json();

        setMeals(data)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)

        fetchData()
    }, [])

    const handleDelete = (id: string) => {
        const newMeals: any = meals.filter((meal) => meal.id !== id)
        setMeals(newMeals)
    }

    console.log(meals.filter((meal) => meal.id === '24'))
    return (
        <>
            {loading && meals.length === 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 w-full gap-4'>
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <CardSkeleton key={idx} />
                    ))}
                </div >
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 w-full gap-4'>
                    {meals.map((meal) => (
                        <MealCard meal={meal} key={meal.id} deleteQuick={(id: string) => handleDelete(id)} />
                    ))}
                </div >
            )}

            {meals.length > 0 &&
                <SecondaryButton styles='h-12 rounded-xl px-8 max-md:px-4'>
                    <span className="">Load more</span>
                    <PiCaretRightBold strokeWidth={10} />
                </SecondaryButton>
            }
            {
                meals.length === 0 && !loading &&
                <div className='flex flex-col items-center gap-4'>
                    <Image src={logo} alt='Food Wagen icon' className='filter size-24 grayscale' />
                    <div className='flex gap-3 items-center text-muted'>
                        <FaRegSadTear className='size-6' />
                        <p className='text-2xl'>No Meals found!</p>
                    </div>
                    <Button styles='h-12 rounded-xl px-8 max-md:px-4'>
                        <BiPlus className='size-6' />
                        <span className="">Add meal</span>
                    </Button>
                </div>
            }
        </>
    )
}

export default MealsList
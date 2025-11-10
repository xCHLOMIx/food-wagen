"use client"
import { MealInterface } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import MealCard from './MealCard'
import SecondaryButton from './SecondaryButton'
import { PiCaretRightBold } from 'react-icons/pi'

const MealsList: React.FC = () => {
    const [meals, setMeals] = useState<MealInterface[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const response = await fetch('https://6852821e0594059b23cdd834.mockapi.io/Food');
            const data = await response.json();

            setMeals(data)
            setLoading(false)
        }

        fetchData()
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 w-full gap-4'>
                {meals.map((meal) => (
                    <MealCard meal={meal} key={meal.createdAt} />
                ))}
            </div>
            <SecondaryButton styles='h-12 rounded-xl px-8 max-md:px-4'>
                <span className="">Load more</span>
                <PiCaretRightBold strokeWidth={10} />
            </SecondaryButton>
        </>
    )
}

export default MealsList
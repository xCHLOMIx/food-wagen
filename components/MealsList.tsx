"use client"
import { MealInterface } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import MealCard from './MealCard'

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
        <div className='grid grid-cols-4 w-full gap-4 mt-14'>
            {meals.map((meal) => (
                <MealCard meal={meal} key={meal.createdAt} />
            ))}
        </div>
    )
}

export default MealsList
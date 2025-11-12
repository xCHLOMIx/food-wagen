"use client"
import "@/app/globals.css"
import Image from 'next/image'
import logo from '@/public/logo-icon.png'
import SecondaryButton from "./SecondaryButton"
import MealForm from "./MealForm"
import { useState } from "react"

const Navbar = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <nav className='food-navbar'>
            <MealForm showForm={showForm} refetch={() => {}} setShowForm={(res: boolean) => setShowForm(res)} />
            <div className='flex items-center gap-3'>
                <Image src={logo} alt='Food Wagen Logo' className='size-6' />
                <h2 className='text-2xl font-bold max-md:hidden'>
                    <span className='text-primary'>Food</span>
                    <span className='text-secondary'>Wagen</span>
                </h2>
            </div>
            <SecondaryButton handleClick={() => setShowForm(true)} styles='text-sm h-8 rounded-xl px-8 max-md:px-4'>
                Add Meal
            </SecondaryButton>
        </nav>
    )
}

export default Navbar
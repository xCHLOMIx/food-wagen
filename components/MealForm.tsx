"use client"
import React, { use, useEffect, useRef, useState } from 'react'
import { RxCaretDown } from 'react-icons/rx'
import SecondaryButton from './SecondaryButton'
import { options } from '@/lib/data'
import { useCreate } from '@/hooks/useCreate'

const MealForm: React.FC<{ showForm: boolean, setShowForm: (res: boolean) => void }> = ({ showForm, setShowForm }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef: any = useRef(null);
    const [status, setStatus] = useState<boolean | null>(null);
    const [name, setName] = useState<string>("");
    const [rating, setRating] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [open, setOpen] = useState<string>("");
    const [logo, setLogo] = useState<string>("");
    const { errors, handleSubmit, loading, error } = useCreate()
    console.log(error)
    console.log(errors)
    useEffect(() => {
        const handleClickedOutside = (event: Event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }

        }
        document.addEventListener("mousedown", handleClickedOutside)

        return () => document.removeEventListener("mousedown", handleClickedOutside)
    }, [])
    
    return (
        <div className={`fixed top-0 z-50 left-0 py-[132px] ${showForm ? "flex" : "hidden"} food-no-scroll-bar justify-center bg-[#C6C2C285] w-full px-4 h-screen overflow-y-auto`}>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await handleSubmit({ meal: { id: "", name, Price: price, rating, avatar, open: status, logo } })
                setTimeout(() => { setShowForm(false) }, 1000);
            }} className='bg-white custom-shadow-2 px-11 py-16 rounded-2xl w-full flex lg:px-32 flex-col items-center h-max max-w-[732px]'>
                {error && <div className='pt-3 text-error'>{error}</div>}
                <h1 className='text-tertiary text-[32px] font-bold'>Add a meal</h1>
                <div className='flex flex-col gap-3 w-full'>
                    <div className='w-full mt-2'>
                        <label htmlFor="food_name" className='sr-only'>Food name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} className='food-input' id='food_name' name='food_name' placeholder='Food name' />
                        {errors.name && <div className='pt-3 text-error'>{errors.name}</div>}
                    </div>
                    <div className='w-full mt-2'>
                        <label htmlFor="food_rating" className='sr-only'>Food rating</label>
                        <input type="text" onChange={(e) => setRating(e.target.value)} className='food-input' id='food_rating' name='food_rating' placeholder='Food rating' />
                        {errors.rating && <div className='pt-3 text-error'>{errors.rating}</div>}
                    </div>
                    <div className='w-full mt-2'>
                        <label htmlFor="food_name" className='sr-only'>Food price</label>
                        <input type="text" onChange={(e) => setPrice(e.target.value)} className='food-input' id='food_name' name='food_name' placeholder='Food price' />
                        {errors.Price && <div className='pt-3 text-error'>{errors.Price}</div>}
                    </div>
                    <div className='w-full mt-2'>
                        <label htmlFor="food_image" className='sr-only'>Food image</label>
                        <input type="text" onChange={(e) => setAvatar(e.target.value)} className='food-input' id='food_image' name='food_image' placeholder='Food image (link)' />
                        {errors.avatar && <div className='pt-3 text-error'>{errors.avatar}</div>}
                    </div>
                    <div className='w-full mt-2'>
                        <label htmlFor="restaurant_logo" className='sr-only'>Restaurant logo</label>
                        <input type="text" onChange={(e) => setLogo(e.target.value)} className='food-input' id='restaurant_logo' name='restaurant_logo' placeholder='Restaurant logo (link)' />
                        {errors.logo && <div className='pt-3 text-error'>{errors.logo}</div>}
                    </div>
                    <div className='w-full mt-2'>
                        <label htmlFor="restaurant_status" className='sr-only'>Restaurant status</label>
                        <div ref={dropdownRef} onClick={() => setIsOpen(!isOpen)} className='food-input flex relative items-center justify-between cursor-pointer' id='restaurant_status'>
                            <span className={`${status != null ? "text-black capitalize" : "text-placeholder"} `}>{status != null ? (status ? "Open" : "Closed") : "Restaurant status"}</span>
                            <RxCaretDown className={`${isOpen && "rotate-180"} transition duration-150 size-5`} />
                            <div className={`absolute z-50 ${isOpen ? "flex" : "hidden"} flex-col top-full mt-2 bg-white rounded-lg p-2 w-full left-0 border border-foreground-muted/50`}>
                                {options.map((option) => (
                                    <div
                                        key={option.name}
                                        onClick={() => setStatus(option.value == "open")}
                                        className={`${option.value == "closed" && "text-error"} hover:bg-bg-muted p-2 rounded-sm`}
                                    >
                                        {option.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {errors.open && <div className='pt-3 text-error'>{errors.open}</div>}
                    </div>
                    <div className='grid grid-cols-2 gap-3 w-full my-[18px]'>
                        <SecondaryButton loading={loading} type='submit' styles='w-full p-3 text-sm rounded-xl text-center'>
                            <span className='text-center w-full font-bold'>{loading ? "Adding..." : "Add"}</span>
                        </SecondaryButton>
                        <button onClick={() => setShowForm(false)} type='button' className='food-outline-button text-sm w-full'>
                            <span className='text-center w-full font-bold'>Cancel</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MealForm
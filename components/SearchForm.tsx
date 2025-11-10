"use client"
import { FaMotorcycle, FaSearch, FaShoppingBag } from 'react-icons/fa'
import Form from 'next/form'
import Selector from './Selector'
import { CiSearch } from 'react-icons/ci'
import Button from './Button'
import { useState } from 'react'

const SearchForm = () => {
    const [active, setActive] = useState<number>(1);

    return (
        <Form action="/" className='bg-white rounded-2xl'>
            <div className='flex items-center p-5 gap-3 border-b border-border'>
                <Selector handleClick={() => setActive(1)} icon={<FaMotorcycle className='h-4 w-auto' />} active={active == 1} text='Delivery' />
                <Selector handleClick={() => setActive(2)} icon={<FaShoppingBag className='h-4 w-auto' />} active={active == 2} text='Pickup' />
            </div>
            <div className='p-5 flex gap-2'>
                <div className='bg-bg-muted flex-1 rounded-lg flex items-center gap-2 px-3'>
                    <CiSearch className='size-6 text-primary' />
                    <input type="text" placeholder='What do you like to eat today?' className='w-full outline-0 py-3' />
                </div>
                <Button type='submit'>
                    <FaSearch className='size-3' />
                    <span className='text-sm max-md:hidden'>Find meal</span>
                </Button>
            </div>
        </Form>
    )
}

export default SearchForm
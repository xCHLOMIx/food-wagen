import React from 'react'
import { FaMotorcycle, FaSearch, FaShoppingBag } from 'react-icons/fa'
import Form from 'next/form'
import Selector from './Selector'
import { CiSearch } from 'react-icons/ci'
import Button from './Button'

const SearchForm = () => {
    return (
        <Form action="/" className='bg-white rounded-2xl'>
            <div className='flex items-center p-4 border-b border-border'>
                <Selector icon={<FaMotorcycle className='h-4 w-auto' />} active={true} text='Delivery' />
                <Selector icon={<FaShoppingBag className='h-4 w-auto' />} active={false} text='Pickup' />
            </div>
            <div className='p-4 flex gap-2'>
                <div className='bg-bg-muted flex-1 rounded-lg flex items-center gap-2 px-3'>
                    <CiSearch className='size-6 text-primary' />
                    <input type="text" placeholder='What do you like to eat today?' className='w-full py-3' />
                </div>
                <Button type='submit'>
                    <FaSearch className='size-3'/>
                    <span className='text-sm max-md:hidden'>Find meal</span>
                </Button>
            </div>
        </Form>
    )
}

export default SearchForm
"use client"
import React, { useState } from 'react'
import Selector from './Selector'
import { FaMotorcycle, FaShoppingBag } from 'react-icons/fa'

const SelectorList: React.FC = () => {
    const [active, setActive] = useState<number>(1);

    return (
        <div className='flex items-center p-5 gap-3 border-b border-border'>
            <Selector handleClick={() => setActive(1)} icon={<FaMotorcycle className='h-4 w-auto' />} active={active == 1} text='Delivery' />
            <Selector handleClick={() => setActive(2)} icon={<FaShoppingBag className='h-4 w-auto' />} active={active == 2} text='Pickup' />
        </div>
    )
}

export default SelectorList
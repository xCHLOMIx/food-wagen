import React from 'react'

const CardSkeleton: React.FC = () => {
    return (
        <div className='w-full animate-pulse flex flex-col gap-6 items-start'>
            <div className='w-full h-60 bg-gray-200 relative overflow-hidden rounded-2xl'>
                <div className='absolute bg-gray-300 h-10 w-1/3 rounded-md top-4 left-4' />
            </div>
            <div className='grid grid-cols-5 gap-4 w-full items-center'>
                <div className='size-13 rounded-lg bg-gray-200 overflow-hidden relative' />
                <div className='w-full col-span-3 flex flex-col gap-1'>
                    <div className='bg-gray-200 h-4.5 rounded-md w-9/10' />
                    <div className='bg-gray-200 h-4.5 rounded-md w-3/5' />
                </div>
            </div>
            <div className='bg-gray-200 h-8 w-1/4 rounded-xl' />
        </div>
    )
}

export default CardSkeleton
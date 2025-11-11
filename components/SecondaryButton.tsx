import { ButtonProps } from '@/lib/types'
import React from 'react'
import { PiSpinner } from 'react-icons/pi'

const SecondaryButton: React.FC<ButtonProps> = ({ children, type, styles, loading, handleClick }) => {
    return (
        <button disabled={loading} onClick={handleClick} type={type} className={`food-secondary-button ${loading && "opacity-60"} custom-shadow ${styles}`}>
            {children}
            {loading && <PiSpinner strokeWidth={10} className='animate-spin size-4.5 absolute right-3' />}
        </button>
    )
}

export default SecondaryButton
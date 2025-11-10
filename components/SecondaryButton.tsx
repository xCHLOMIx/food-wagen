import { ButtonProps } from '@/lib/types'
import React from 'react'

const SecondaryButton: React.FC<ButtonProps> = ({ children, type, styles }) => {
    return (
        <button type={type} className={`food-secondary-button custom-shadow custom-shadow-2 ${styles}`}>
            {children}
        </button>
    )
}

export default SecondaryButton
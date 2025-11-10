import { ButtonProps } from '@/lib/types'
import React from 'react'

const SecondaryButton: React.FC<ButtonProps> = ({ children, type, styles }) => {
    return (
        <button type={type} className={`${styles} food-secondary-button custom-shadow custom-shadow-2`}>
            {children}
        </button>
    )
}

export default SecondaryButton
import { ButtonProps } from '@/lib/types'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ children, type, styles }) => {
    return (
        <button type={type} className={`${styles} food-button`}>
            {children}
        </button>
    )
}

export default Button
import { ButtonProps } from '@/lib/types'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ children, type, styles, handleClick }) => {
    return (
        <button type={type} onClick={handleClick} className={`${styles} food-button`}>
            {children}
        </button>
    )
}

export default Button
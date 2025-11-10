import React from 'react'

interface ButtonProps {
    children: React.ReactNode,
    type?: "submit" | "button" | "reset",
    styles?: string
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
    return (
        <button type={type} className={`button`}>
            {children}
        </button>
    )
}

export default Button
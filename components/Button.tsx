import React from 'react'

const Button: React.FC<{ children: React.ReactNode, type?: "submit" | "button" | "reset" }> = ({ children, type }) => {
    return (
        <button type={type} className={`bg-linear-to-r from-[#FF7A7A] to-120% to-primary text-white font-semibold w-max p-1 px-8 max-md:px-4 rounded-lg flex items-center gap-2`}>
            {children}
        </button>
    )
}

export default Button
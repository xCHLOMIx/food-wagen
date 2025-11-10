import React from 'react'

interface SelectorProps {
    icon: any,
    text: string,
    active: boolean
    handleClick: () => void
}

const Selector: React.FC<SelectorProps> = ({ text, icon, active, handleClick }) => {
    return (
        <div onClick={() => handleClick()} className={`${active ? "text-primary bg-primary/10 cursor-default" : "text-muted hover:bg-black/2 cursor-pointer"} font-semibold w-max p-1 px-3 rounded-lg flex items-center gap-2`}>
            {icon}
            {text}
        </div>
    )
}

export default Selector
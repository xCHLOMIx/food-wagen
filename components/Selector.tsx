import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import React, { JSX, ReactNode } from 'react'
import { IconType } from 'react-icons'

const Selector: React.FC<{ icon: any, text: string, active: boolean }> = ({ text, icon, active }) => {
    return (
        <div className={`${active ? "text-primary bg-primary/10" : "text-muted"} font-semibold w-max p-1 px-3 rounded-lg flex items-center gap-2`}>
            {icon}
            {text}
        </div>
    )
}

export default Selector
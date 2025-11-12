export interface ButtonProps {
    children: React.ReactNode,
    type?: "submit" | "button" | "reset",
    styles?: string,
    loading?: boolean
    handleClick?: any
}

export interface SelectorProps {
    icon: any,
    text: string,
    active: boolean
    handleClick: () => void
}

export interface MealInterface {
    createdAt?: string,
    name: string,
    avatar: string,
    rating: string,
    open: boolean | null,
    logo: string,
    Price: string,
    id: string
}

export interface LinkInterface {
    title: string,
    items: LinkItemInterface[]
}

export interface LinkItemInterface {
    name: string,
    href: string
}

export interface OptionInterface {
    name: string,
    value: string
}
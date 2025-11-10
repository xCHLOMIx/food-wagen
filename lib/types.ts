export interface ButtonProps {
    children: React.ReactNode,
    type?: "submit" | "button" | "reset",
    styles?: string
}

export interface SelectorProps {
    icon: any,
    text: string,
    active: boolean
    handleClick: () => void
}

export interface MealInterface {
    createdAt: string,
    name: string,
    avatar: string,
    rating: string,
    open: boolean,
    logo: string,
    Price: string,
    id: string
}
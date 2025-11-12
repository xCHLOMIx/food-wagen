import { render, screen } from '@testing-library/react'
import MealCard from '@/components/MealCard'
import { MealInterface } from '@/lib/types'
import '@testing-library/jest-dom'

// Mock next/image
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />,
}))

// Mock react-icons
jest.mock('react-icons/fa', () => ({
    FaStar: () => <span>★</span>,
    FaTag: () => <span>$</span>,
}))

jest.mock('react-icons/io', () => ({
    IoMdMore: () => <span>⋮</span>,
}))

// Mock components
jest.mock('@/components/SecondaryButton', () => {
    return function MockButton({ children }: any) {
        return <button>{children}</button>
    }
})

jest.mock('@/components/MealForm', () => {
    return function MockMealForm() {
        return null
    }
})

// Mock the useDelete hook
jest.mock('@/hooks/useDelete', () => ({
    useDelete: () => ({
        loading: false,
        deleteMeal: jest.fn(),
        success: false,
    }),
}))

test('renders meal card correctly', () => {
    const mockMeal: MealInterface = {
        id: '1',
        name: 'Delicious Burger',
        avatar: '/burger.jpg',
        rating: '4.5',
        open: true,
        logo: '/logo.jpg',
        Price: '12.99',
    }

    render(<MealCard meal={mockMeal} refetch={jest.fn()} deleteQuick={jest.fn()} />)

    expect(screen.getByText('Delicious Burger')).toBeInTheDocument()
    expect(screen.getByText('$12.99')).toBeInTheDocument()
    expect(screen.getByText('4.5')).toBeInTheDocument()
    expect(screen.getByText('Open')).toBeInTheDocument()
})

test('renders closed status correctly', () => {
    const mockMeal: MealInterface = {
        id: '2',
        name: 'Pizza',
        avatar: '/pizza.jpg',
        rating: '4.8',
        open: false,
        logo: '/pizza-logo.jpg',
        Price: '15.99',
    }

    render(<MealCard meal={mockMeal} refetch={jest.fn()} deleteQuick={jest.fn()} />)

    expect(screen.getByText('Pizza')).toBeInTheDocument()
    expect(screen.getByText('Closed')).toBeInTheDocument()
})
import { render, screen, waitFor } from '@testing-library/react'
import MealsList from '@/components/MealsList'
import '@testing-library/jest-dom'

// Mock next/image
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />,
}))

// Mock react-icons
jest.mock('react-icons/pi', () => ({
    PiCaretRightBold: () => <span>→</span>,
}))

jest.mock('react-icons/fa', () => ({
    FaRegSadTear: () => <span>😢</span>,
}))

jest.mock('react-icons/bi', () => ({
    BiPlus: () => <span>+</span>,
}))

// Mock MealCard component
jest.mock('@/components/MealCard', () => {
    return function MockMealCard({ meal }: any) {
        return <div data-testid={`meal-card-${meal.id}`}>{meal.name}</div>
    }
})

// Mock other components
jest.mock('@/components/SecondaryButton', () => {
    return function MockButton({ children }: any) {
        return <button>{children}</button>
    }
})

jest.mock('@/components/Button', () => {
    return function MockButton({ children, handleClick }: any) {
        return <button onClick={handleClick}>{children}</button>
    }
})

jest.mock('@/components/CardSkeleton', () => {
    return function MockCardSkeleton() {
        return <div>Skeleton Loading...</div>
    }
})

jest.mock('@/components/MealForm', () => {
    return function MockMealForm() {
        return null
    }
})

// Mock fetch for API calls
global.fetch = jest.fn()

test('fetches and displays meals from API', async () => {
    const mockMeals = [
        {
            id: '1',
            name: 'Burger',
            avatar: '/burger.jpg',
            rating: '4.5',
            open: true,
            logo: '/logo.jpg',
            Price: '12.99',
        },
        {
            id: '2',
            name: 'Pizza',
            avatar: '/pizza.jpg',
            rating: '4.8',
            open: true,
            logo: '/pizza-logo.jpg',
            Price: '15.99',
        },
    ]

        ; (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => mockMeals,
        })

    render(<MealsList search="" />)

    // Wait for meals to load
    await waitFor(() => {
        expect(screen.getByText('Burger')).toBeInTheDocument()
        expect(screen.getByText('Pizza')).toBeInTheDocument()
    })

    // Verify fetch was called with correct URL
    expect(global.fetch).toHaveBeenCalledWith(
        'https://6852821e0594059b23cdd834.mockapi.io/Food',
        { cache: 'no-store' }
    )
})

test('displays no meals message when API returns empty', async () => {
    ; (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 404,
        json: async () => [],
    })

    render(<MealsList search="" />)

    // Wait for empty state message
    await waitFor(() => {
        expect(screen.getByText('No Meals found!')).toBeInTheDocument()
    })
})

test('searches meals by name', async () => {
    const mockSearchResults = [
        {
            id: '1',
            name: 'Burger Supreme',
            avatar: '/burger.jpg',
            rating: '4.5',
            open: true,
            logo: '/logo.jpg',
            Price: '12.99',
        },
    ]

        ; (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => mockSearchResults,
        })

    render(<MealsList search="burger" />)

    // Wait for search results
    await waitFor(() => {
        expect(screen.getByText('Burger Supreme')).toBeInTheDocument()
    })

    // Verify fetch was called with search query
    expect(global.fetch).toHaveBeenCalledWith(
        'https://6852821e0594059b23cdd834.mockapi.io/Food?name=burger',
        { cache: 'no-store' }
    )
})

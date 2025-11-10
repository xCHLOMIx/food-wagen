import "@/app/globals.css"
import Image from 'next/image'
import logo from '@/public/logo-icon.png'
import SecondaryButton from "./SecondaryButton"

const Navbar = () => {
    return (
        <nav className='food-navbar'>
            <div className='flex items-center gap-3'>
                <Image src={logo} alt='Food Wagen Logo' className='size-6' />
                <h2 className='text-2xl font-bold max-md:hidden'>
                    <span className='text-primary'>Food</span>
                    <span className='text-secondary'>Wagen</span>
                </h2>
            </div>
            <SecondaryButton styles='text-sm h-8 rounded-xl px-8 max-md:px-4'>
                Add Meal
            </SecondaryButton>
        </nav>
    )
}

export default Navbar
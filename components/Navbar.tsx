import "@/app/globals.css"
import Image from 'next/image'
import logo from '@/public/logo-icon.png'

const Navbar = () => {
    return (
        <nav className='food-navbar'>
            <div className='flex items-center gap-3'>
                <Image src={logo} alt='Food Wagen Logo' className='size-6' />
                <h1 className='text-2xl font-bold max-md:hidden'>
                    <span className='text-primary'>Food</span>
                    <span className='text-secondary'>Wagen</span>
                </h1>
            </div>
            <button className='food-nav-btn custom-shadow custom-shadow-2'>
                Add Meal
            </button>
        </nav>
    )
}

export default Navbar
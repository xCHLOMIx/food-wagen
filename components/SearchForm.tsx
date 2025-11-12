import { FaSearch } from 'react-icons/fa'
import Form from 'next/form'
import { CiSearch } from 'react-icons/ci'
import Button from './Button'
import SelectorList from './SelectorList'

const SearchForm: React.FC<{ query: string }> = ({ query }) => {
    return (
        <Form action="/" className='bg-white rounded-2xl'>
            <SelectorList />
            <div className='p-5 flex gap-2'>
                <div className='bg-bg-muted flex-1 rounded-lg flex items-center gap-2 px-3'>
                    <CiSearch className='size-6 text-primary' />
                    <input name='query' defaultValue={query} type="text" placeholder='What do you like to eat today?' className='w-full placeholder:text-placholder outline-0 py-3' />
                </div>
                <Button type='submit'>
                    <FaSearch className='size-3' />
                    <span className='text-sm max-md:hidden'>Find meal</span>
                </Button>
            </div>
        </Form>
    )
}

export default SearchForm
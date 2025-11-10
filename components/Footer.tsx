import Link from 'next/link'
import { links } from '@/lib/links'
import { IconType } from 'react-icons'
import { FaFacebook, FaInstagram, FaRegCopyright, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import SecondaryButton from './SecondaryButton'

interface SocialsInterface {
    text: string,
    icon: IconType,
    href: string
}

const socials: SocialsInterface[] = [
    { text: "Instagram", href: "http://instagram.com/", icon: FaInstagram },
    { text: "Facebook", href: "http://facebook.com/", icon: FaFacebook },
    { text: "Twitter", href: "http://x.com/", icon: FaTwitter },
]

const Footer = () => {
    return (
        <footer className='bg-custom-black px-4 pt-12 flex flex-col lg:px-40 text-white'>
            <div className='min-h-60 flex justify-between'>
                <div className="grid grid-cols-3 gap-4">
                    {links.map((link) => (
                        <div key={link.title}>
                            <h4 className='font-bold text-lg'>{link.title}</h4>
                            <div className='flex flex-col gap-2 mt-6 text-bg-muted'>
                                {link.items.map((item) => (
                                    <Link href={item.href} key={item.name} className='text-sm hover:underline underline-offset-4'>{item.name}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-7'>
                    <h4 className='font-bold text-foreground-muted text-sm'>FOLLOW US</h4>
                    <div className='flex gap-2'>
                        {socials.map((social) => (
                            <div key={social.text}>
                                <social.icon className='size-5 text-icon hover:text-white cursor-pointer transition duration-150' title={social.text} />
                            </div>
                        ))}
                    </div>
                    <p className='font-bold text-foreground-muted'>Receive exclusive offers in your mailbox</p>
                    <form action="" className='flex items-center gap-3'>
                        <div className='bg-foreground w-80 gap-2 items-center flex px-3 rounded-lg'>
                            <MdEmail className='size-6 text-foreground-muted' />
                            <input type="email" className='py-3 outline-0' placeholder='Enter Your email' />
                        </div>
                        <SecondaryButton styles='h-full px-4 text-sm rounded-lg'>
                            Subscribe
                        </SecondaryButton>
                    </form>
                </div>
            </div>
            <div className='py-2 border-t border-foreground'>
                <p className='text-sm flex items-center gap-2'>
                    <span className='font-light'>All rights Reserved</span>
                    <FaRegCopyright />
                    <span>Your Company, 2021</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
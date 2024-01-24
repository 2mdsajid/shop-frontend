import { NAVBAR_LINKS } from '@/lib/data'
import Link from 'next/link'
import HeaderSidebar from './HeaderSidebar'
import { Button } from '../../ui/button'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='w-screen bg-primary h-14 fixed top-0 left-0 z-100 flex items-center justify-between px-4 md:px-10 lg:px-20 xl:px-32 '>
            <HeaderSidebar />
            <div className='flex items-center gap-10'>
                <h1>
                    AAFINAYA
                </h1>
                <div className='hidden md:flex'>
                    {NAVBAR_LINKS.map((link, index) => (
                        <Button asChild
                            key={index}
                            className='bg-primary text-black hover:bg-accent1 hover:text-white h-14 p-0 px-2 rounded-none'
                        >
                            <Link href={link.href}>{link.text}</Link>
                        </Button>
                    ))}
                </div>
            </div>
            <div>
                LOGO
            </div>
        </header>
    )
}

export default Header
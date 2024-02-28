'use client'
import { NAVBAR_LINKS } from '@/lib/data';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {}

const HeaderSidebar = (props: Props) => {
    const [showLinks, setShowLinks] = useState(false);

    const handleToggle = () => {
        setShowLinks(!showLinks);
    };

    return (
        <div className='md:hidden'>
            <div className='md:hidden'>
                <Button onClick={handleToggle}>{
                    showLinks ? <>X</> : <>T</>
                }</Button>
            </div>
            <div className={`${showLinks ? 'w-screen ' : 'w-[0vw]'} dark:bg-dark-primary bg-primary  flex  flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 absolute top-14 left-0  z-100 md:static h-screen md:h-auto md:w-auto md:items-center transition-width ease duration-200`}>
                {showLinks && (
                    <div className='flex flex-col'>
                        {NAVBAR_LINKS.map((link, index) => (
                            <Button asChild
                                key={index}
                                className='bg-primary text-black hover:bg-accent1 hover:text-white h-14 p-0 px-2 rounded-none'
                            >
                                <Link href={link.href}>{link.text}</Link>
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderSidebar
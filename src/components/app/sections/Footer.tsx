import Link from 'next/link';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={`bg-accent1 text-white w-full  flex flex-col gap-5 justify-center mx-auto py-5`}>
            <div className={`flex flex-col md:flex-row md:justify-between gap-2 my-5`}>
                <div className='w-[70%] mx-auto md:w-[30%]  flex-col gap-4 items-center md:items-start flex mb-10 md:mb-0'>
                    <h1 className='text-4xl font-bold'>AAFINAYA</h1>
                    {/* <p className='w-full py-5 text-lg'>Welcome to Medlocus, a platform designed to help students excel in their studies through comprehensive MCQ practice.</p>
                     */}
                    <div className='items-center md:items-start flex flex-col'>
                        <div className='flex gap-3'>
                            <Link href={'https://www.facebook.com/'} className='flex items-center gap-1 text-lg'>
                                <FaFacebookF />
                            </Link>
                            <Link href={'https://www.youtube.com/'} className='flex items-center gap-1 text-lg'>
                                <FaYoutube />
                            </Link>
                        </div>
                        <p>someone@gmail.com</p>
                    </div>
                </div>

                <div className='w-[70%] md:w-max mx-auto flex flex-col items-center md:items-start mb-10 md:mb-0'>
                    <h1 className='font-semibold text-2xl '>Shop by Category</h1>
                    <Link className='hover:underline' href={'/handbags'} >Handbags</Link>
                    <Link className='hover:underline' href={'/clutches'} >Clutches</Link>
                    <Link className='hover:underline' href={'/totes'} >Totes</Link>
                    {/* Add more categories as needed */}
                </div>

                <div className='w-[70%] md:w-max mx-auto flex flex-col items-center md:items-start mb-10 md:mb-0'>
                    <h1 className='font-semibold text-2xl '>Featured Products</h1>
                    <Link className='hover:underline' href={'/product/featured-1'} >Featured Handbag 1</Link>
                    <Link className='hover:underline' href={'/product/featured-2'} >Featured Clutch 2</Link>
                    {/* Add more featured products as needed */}
                </div>

                <div className='w-[70%] md:w-max mx-auto flex flex-col items-center md:items-start mb-10 md:mb-0'>
                    <h1 className='text-2xl font-semibold'>Useful Links</h1>
                    <Link className='hover:underline' href={'/contact'} >Contact</Link>
                    <Link className='hover:underline' href={'/profile'} >Profile</Link>
                    <Link className='hover:underline' href={'/cart'} >Cart</Link>
                </div>
            </div>

            <div className="w-full h-full flex items-center justify-center 4">
                <h1 className="text-sm md:text-xl ">
                    &copy; 2024 Aafinaya. All rights reserved.
                </h1>
            </div>
        </footer>
    )
}

export default Footer

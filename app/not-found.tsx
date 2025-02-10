import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const NotFound = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-24 h-24 mx-auto mb-6">
                <svg className="w-full h-full text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>      <h1 className="text-3xl font-bold text-gray-800 mt-4">404 - Page Not Found</h1>
            <p className="text-gray-600 mt-2">The page you are looking for might have been removed or is temporarily unavailable.</p>
            <Link href="/" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go Back Home
            </Link>
        </div>
    )
}

export default NotFound
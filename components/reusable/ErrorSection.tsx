    import React from 'react'

    type Props = {
        message?: string
    }

    const ErrorSection = ({ message = "Something went wrong. Please try again later." }: Props) => {
        return (
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600">Error</h2>
                    <p className="mt-2 text-sm text-gray-600">{message}</p>
                </div>
            </div>
        )
    }

    export default ErrorSection
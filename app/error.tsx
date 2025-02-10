'use client'

import React, { useEffect } from 'react'

type Props = {
  message?: string
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full space-y-8 p-10 bg-white rounded-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
          <div className="w-24 h-24 mx-auto mb-6">
            <svg className="w-full h-full text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-gray-600 text-lg">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}


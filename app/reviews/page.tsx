import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
            <p className="mb-4">
                We value our customers' feedback and strive to provide the best products and services. Here are some of the reviews from our satisfied customers:
            </p>
            {/* Example Review */}
            <div className="border p-4 mb-4 rounded">
                <h2 className="text-xl font-semibold">Jane Doe</h2>
                <p className="text-gray-600">"I absolutely love the quality of the purses I purchased. The craftsmanship is top-notch!"</p>
            </div>
            {/* Add more reviews as needed */}
        </div>
    )
}

export default page
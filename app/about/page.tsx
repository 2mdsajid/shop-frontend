import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">About Us</h1>
            <p className="mb-4">
                Welcome to Aaifa! We are dedicated to providing high-quality, handcrafted purses that blend style and functionality. Our mission is to offer unique designs that cater to diverse tastes and preferences.
            </p>
            <p className="mb-4">
                Our team of skilled artisans ensures that every purse is made with precision and care, using the finest materials available. We believe in sustainability and ethical practices, ensuring that our products not only look good but also contribute positively to the community.
            </p>
            <p>
                Thank you for choosing Aaifa. We hope you enjoy our products as much as we enjoy creating them for you.
            </p>
        </div>)
}

export default page
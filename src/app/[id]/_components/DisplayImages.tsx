'use client'


import React, { useState } from 'react'

type Props = {
    name: string
    image: string
    isFreeDelivery?: boolean
    images?: string[]
}

const DisplayImages = (props: Props) => {
    const { name, image, images, isFreeDelivery } = props
    const [currentImage, setCurrentImage] = useState(image)
    return (
        <div className="w-full rounded-md p-2 shadow relative">
            <img
                alt={name}
                className="mb-4"
                height="400"
                src={currentImage}
                style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                }}
                width="400"
            />
            {images &&
                <div className="flex space-x-2">
                    {images.map((i, k) => {
                        return (
                            <img
                                onClick={() => setCurrentImage(i)}
                                key={k}
                                alt={`${name} ${i}`}
                                className={`border p-1 ${currentImage === i && 'border border-black'}`}
                                height="50"
                                src={i}
                                style={{
                                    aspectRatio: "50/50",
                                    objectFit: "cover",
                                }}
                                width="50"
                            />
                        )
                    })}
                </div>}
            {isFreeDelivery && <div className="absolute top-2 left-2 bg-green-500 text-white text-center py-1 px-2 rounded-md">Free Delivery</div>}
        </div>
    )
}

export default DisplayImages
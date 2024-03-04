import React from 'react'

type Props = {
    imageUrl: string
    name: string
    category: string
}

const CheckoutDetails = (props: Props) => {
    const { name, imageUrl, category } = props
    return (
        <div className="flex gap-4 col-span-3">
            <img
                alt={name}
                className="h-20 w-20 flex-none rounded-md bg-gray-200"
                height="80"
                loading="lazy"
                src={imageUrl}
                style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                }}
                width="80"
            />
            <div className="flex-1">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{category}</p>
            </div>
        </div>
    )
}

export default CheckoutDetails
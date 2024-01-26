import React from 'react'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'

type Props = {
    id: string
    name: string
    category: string
    price: number
    image: string
    hasDiscount?: {
        state: boolean
        value: number
    }
    itemsLeft?: number
}

const DisplayDetails = (props: Props) => {
    const { id, name, category, price, itemsLeft, hasDiscount, image } = props
    return (
        <div className="border-b pb-4">
            <div className="flex gap-4">
                <img
                    alt={name}
                    className="h-20 w-20 flex-none rounded-md bg-gray-200"
                    height="80"
                    src={image}
                    style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                    }}
                    width="80"
                />
                <div className="flex-1">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">{category}</p>
                    <span className="text-sm text-gray-500">Earliest Delivery: {'NaN'}</span>
                    <div className="flex items-baseline gap-2 mt-2">
                        {hasDiscount && hasDiscount.state ? (
                            <p className='flex gap-2 items-center text-4xl font-bold text-green-600'>
                                Rs {price - hasDiscount.value}
                                <span className="line-through text-xs text-red-400">Rs {price}  </span>
                            </p>
                        ) : (
                            <p className='text-start text-4xl font-bold text-green-600' >Rs {price}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>)
}

export default DisplayDetails
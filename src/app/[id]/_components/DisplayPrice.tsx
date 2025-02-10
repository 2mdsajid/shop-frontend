import React from 'react'

type Props = {
    hasDiscount?: {
        state: boolean,
        value: number,
    }
    price: number
}

const DisplayPrice = (props: Props) => {
    const { hasDiscount, price } = props
    return (
        <div>
            {hasDiscount && hasDiscount.state ? (
                <p className='flex gap-2 items-center text-4xl font-bold text-green-600'>
                    Rs {Math.round(price - hasDiscount.value)}
                    <span className="line-through text-xs text-red-400">Rs {Math.round(price)}  </span>
                </p>
            ) : (
                <p className='text-start text-4xl font-bold text-green-600' >Rs {Math.round(price)}</p>
            )}
        </div>
    )
}

export default DisplayPrice
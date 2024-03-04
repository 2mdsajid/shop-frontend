import React from 'react'

type Props = {
    price: number
    hasDiscount?: {
        state: boolean
        value: number
    }
}

const CheckoutItemPrice = (props: Props) => {
    const { hasDiscount, price } = props
    return (
        <div className="">
            {hasDiscount && hasDiscount.state ? (
                <p className='flex gap-2 items-center'>
                    Rs {Math.round(Math.round(price) - Math.round(hasDiscount.value))}
                </p>
            ) : (
                <p className='text-start' >Rs {Math.round(price)}</p>
            )}
        </div>
    )
}

export default CheckoutItemPrice
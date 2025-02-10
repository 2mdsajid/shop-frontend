import { TDiscount } from '@/lib/schema/product.schema'
import React from 'react'

type Props = {
    price: number
    discount: {
        isActive: boolean
        value: number
    } | null
}

const CheckoutItemPrice = (props: Props) => {
    const { discount, price } = props
    return (
        <div className="">
            {discount?.isActive ? (
                <p className='flex gap-2 items-center'>
                    Rs {Math.round(Math.round(price) - Math.round(discount.value))}
                </p>
            ) : (
                <p className='text-start' >Rs {Math.round(price)}</p>
            )}
        </div>
    )
}

export default CheckoutItemPrice
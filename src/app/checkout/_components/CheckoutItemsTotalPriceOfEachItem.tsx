import React from 'react'

type Props = {
    price: number
    quantity: number
    hasDiscount?: {
        state: boolean
        value: number
    }
}

const CheckoutItemsTotalPriceOfEachItem = (props: Props) => {
    const { price, quantity, hasDiscount } = props
    const totalPrice = hasDiscount?.state
        ? Math.round(price) - Math.round(hasDiscount.value)
        : Math.round(price)
    return (
        <div><p>Rs  {totalPrice * quantity}</p></div>
    )
}

export default CheckoutItemsTotalPriceOfEachItem
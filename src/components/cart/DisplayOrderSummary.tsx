import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Props = {
    itemsCount: number
    total: number
    deliveryCharge: number
    additionalDiscount: number
}

const DisplayOrderSummary = (props: Props) => {
    const { itemsCount, total, deliveryCharge, additionalDiscount } = props
    const totalCharge = total + deliveryCharge - additionalDiscount
    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <span>Subtotal ({itemsCount} items)</span>
                <span>Rs. {total}</span>
            </div>
            <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>Rs. {deliveryCharge}</span>
            </div>
            <div className="flex justify-between">
                <span>Shipping Fee Discount</span>
                <span className="text-red-600">-Rs. {additionalDiscount}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total</span>
                <span>Rs. {totalCharge}</span>
            </div>
        </div>
    )
}

export default DisplayOrderSummary
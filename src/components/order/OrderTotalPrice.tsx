import React from 'react'

type Props = {
    totalAmount: number
    deliveryAmount: number
    discountAmount?: number
}

const OrderTotalPrice = (props: Props) => {
    const { totalAmount, deliveryAmount, discountAmount } = props
    return (
        <div className='space-y-1'>
            <div className="flex justify-between items-center">
                <p className="text-gray-800 font-semibold">Subtotal:</p>
                <p className="text-gray-800 font-semibold">₹{totalAmount}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-800 font-semibold">Shipping:</p>
                <p className="text-gray-800 font-semibold">₹{deliveryAmount}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-800 font-semibold">Discount:</p>
                <p className="text-gray-800 font-semibold">₹{discountAmount || 0}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-bold text-gray-800">Total:</p>
                <p className="text-lg font-bold text-gray-800">₹{totalAmount + deliveryAmount - (discountAmount || 0)}</p>
            </div>
        </div>
    )
}

export default OrderTotalPrice
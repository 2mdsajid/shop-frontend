import React from 'react'

type Props = {}

const OrderDeliveryAddress = (props: Props) => {
    return (
        <div>
            <h3 className="font-semibold text-gray-800 mb-1">Shipping Address:</h3>
            <p className="text-sm text-gray-600">123 Fashion Street, Style City, Trend State, 45678</p>
        </div>
    )
}

export default OrderDeliveryAddress
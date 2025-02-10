"use client"
import React from 'react'
import { TBaseShippingAddress } from '@/lib/schema/shipping.schema'

type Props = {
    shippingAddress: TBaseShippingAddress
}

const OrderDeliveryAddress = (props: Props) => {
    const { shippingAddress } = props
    const { fullName, phoneNumber, address, city, state, pincode } = shippingAddress
    return (
        <div>
            <h3 className="font-semibold text-gray-800 mb-1">Billing Address:</h3>
            <p className="text-sm text-gray-600">Full Name: {fullName}</p>
            <p className="text-sm text-gray-600">Phone Number: {phoneNumber}</p>
            <p className="text-sm text-gray-600">Address: {address}</p>
            <p className="text-sm text-gray-600">City: {city}</p>
            <p className="text-sm text-gray-600">State: {state}</p>
            <p className="text-sm text-gray-600">Pincode: {pincode}</p>
        </div>
    )
}

export default OrderDeliveryAddress
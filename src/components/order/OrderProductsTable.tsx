import { TOrderProduct } from '@/lib/global-types'
import React from 'react'

type Props = {
    products: TOrderProduct[]
}

const OrderProductsTable = (props: Props) => {
    const { products } = props
    return (
        <div className="mb-6 p-4 bg-blue-100 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Order Summary</h2>
            {products.map((p, i) => {
                return (
                    <div key={i} className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-4">
                            <img
                                alt={p.name}
                                className="h-12 w-12"
                                height="50"
                                src={p.imageUrl}
                                style={{
                                    aspectRatio: "50/50",
                                    objectFit: "cover",
                                }}
                                width="50"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">{p.name}</h3>
                                <p className="text-sm text-gray-600">Quantity: {Math.round(p.quantity)}</p>
                                <p className="text-sm text-gray-600">price: {Math.round(p.price)}</p>
                                <p className="text-sm text-gray-600">Category: {p.category}</p>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-800">Rs {Math.round(p.price) * Math.round(p.quantity)}</p>
                    </div>
                )
            })}
        </div>)
}

export default OrderProductsTable
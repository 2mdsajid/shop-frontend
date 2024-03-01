import OrderStatsChangeStatus from '@/components/dashboard/order-stats/OrderStatsChangeStatus'
import ErrorPage from '@/components/reusable/ErrorPage'
import { getOrderById } from '@/lib/actions'
import { formatDate } from '@/lib/utils'
import React from 'react'

type Props = {
    params: {
        id: string //order-id
    }
}

const page = async (props: Props) => {
    const { id } = props.params
    const { data: order, message } = await getOrderById(id)
    if (!order) {
        return (
            <ErrorPage message={message} />
        )
    }

    const { products, orderInfo } = order

    return (
        <div className="p-8">
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Order Information</h2>
                <p>ID: {orderInfo.id}</p>
                <p>Created At: {formatDate(orderInfo.createdAt)}</p>
                <div className="flex gap-3 items-center">
                    <p>Status: {orderInfo.status}</p>
                    <OrderStatsChangeStatus orderId={orderInfo.id} status={orderInfo.status} />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Products</h2>
                {products.map((product, index) => (
                    <div key={index} className="mb-4 p-4 border rounded-lg w-fit">
                        <img src={product.imageUrl} alt={product.name} className="mb-2 rounded-lg h-[10rem] w-[10rem]" />
                        <p className="font-bold">Name: {product.name}</p>
                        <p>Category: {product.category}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Price: {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
import OrderStatsChangeStatus from '@/app/dashboard/order-stats/_components/OrderStatsChangeStatus'
import ErrorPage from '@/components/reusable/ErrorPage'
import { getOrderDetailById } from '@/lib/actions/order.actions'
import { formatDate } from '@/lib/utils'
import React from 'react'

type Props = {
    params: Promise<{
        id: string //order-id
    }>
}

const page = async (props: Props) => {
    const { id } = await props.params
    const { data: order, message } = await getOrderDetailById(id)
    if (!order) {
        return (
            <ErrorPage message={message} />
        )
    }

    const { orderItems,
        orderedBy,
        shippingAddress,
        ...orderInfo } = order

    const totalPrice = orderItems?.reduce((acc, item) => acc + item.price * item.quantity, 0)

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
                {orderItems?.map((item, index) => (
                    <div key={index} className="mb-4 p-4 border rounded-lg w-fit">
                        <img src={item.product.imageUrl} alt={item.product.name} className="mb-2 rounded-lg h-[10rem] w-[10rem]" />
                        <p className="font-bold">Name: {item.product.name}</p>
                        <p>Category: {item.product.category}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.price}</p>
                    </div>
                ))}
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Shipping Address</h2>
                <p>{shippingAddress?.address}</p>
                <p>{shippingAddress?.city}</p>
                <p>{shippingAddress?.state}</p>
                <p>{shippingAddress?.pincode}</p>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Total Price</h2>
                <p>{totalPrice}</p>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Ordered By</h2>
                <p>{orderedBy?.name}</p>
                <p>{orderedBy?.email}</p>
            </div>
            
        </div>
    )
}

export default page
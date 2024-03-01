import { OrderStatsTable } from '@/components/dashboard/order-stats/OrderStatsTable'
import { OrderStatsColumns } from '@/components/dashboard/order-stats/OrderStatsTableColumns'
import ErrorPage from '@/components/reusable/ErrorPage'
import { getAllOrders } from '@/lib/actions'
import { formatDate } from '@/lib/utils'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
    const { data: orders, message } = await getAllOrders()
    if (!orders || orders.length === 0) {
        return (
            <ErrorPage message={message} />
        )
    }

    return (
        <div className="container mx-auto p-4">
            <OrderStatsTable columns={OrderStatsColumns} data={orders} />
        </div>
    )
}

export default page
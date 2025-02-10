import { OrderStatsTable } from '@/app/dashboard/order-stats/_components/OrderStatsTable'
import { OrderStatsColumns } from '@/app/dashboard/order-stats/_components/OrderStatsTableColumns'
import ErrorPage from '@/components/reusable/ErrorPage'
import { getAllOrders } from '@/lib/actions/order.actions'
import { formatDate } from '@/lib/utils'

type Props = {}

const page = async (props: Props) => {
    const { data: orders, message } = await getAllOrders()
    if (!orders || orders.length === 0) {
        return (
            <ErrorPage message={message} />
        )
    }

    const formattedOrders = orders.map((order) => ({
        id: order.id,
        createdAt: formatDate(order.createdAt),
        status: order.status,
        name: order.orderedBy.name,
        email: order.orderedBy.email
    }))

    return (
        <div className="container mx-auto p-4">
            <OrderStatsTable columns={OrderStatsColumns} data={formattedOrders} />
        </div>
    )
}

export default page
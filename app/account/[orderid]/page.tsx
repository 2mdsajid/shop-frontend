import ErrorPage from '@/components/reusable/ErrorPage'
import { getOrderDetailById } from '@/lib/actions/order.actions'
import { formatDate } from '@/lib/utils'

type Props = {
    params: Promise<{
        orderid: string
    }>
}

const page = async (props: Props) => {
    const {orderid} = await props.params
    const {data, message} = await getOrderDetailById(orderid)
    if(!data) {
        return <ErrorPage message={message} />
    }

    
  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl font-bold'>Order Details</h1>
      <div className='flex flex-col gap-4'>
        <div key={data.id}>
          <p>Order ID: {data.id}</p>
          <p>Order Date: {formatDate(data.createdAt)}</p>
          <p>Order Status: {data.status}</p>
          <p>Order Total: {data.orderItems?.reduce((acc, item) => acc + item.price, 0)}</p>
        </div>
      </div>
    </div>
  )
}

export default page
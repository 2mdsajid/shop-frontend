import { getUserSession } from '@/lib/actions/auth.actions'
import { getOrdersByUserId } from '@/lib/actions/order.actions'
import { getFavouriteProducts } from '@/lib/actions/product.actions'
import { getShippingAddress } from '@/lib/actions/shipping.actions'
import { redirect } from 'next/navigation'
import AccountMain from './_components/AccountMain'

type Props = {}

const Page = async (props: Props) => {
  const { data, message: userSessionMessage } = await getUserSession()
  if (!data) {
    redirect('/login')
  }

  const { data: orders } = await getOrdersByUserId(data.id)
  const formattedOrders = orders?.map((order) => ({
    id: order.id,
    createdAt: order.createdAt,
    status: order.status,
  }))

  const { data: shippingAddress } = await getShippingAddress()
  console.log(shippingAddress)
  const { data: favouriteProducts, message } = await getFavouriteProducts()


  
  return (
    <AccountMain 
    orders={formattedOrders} 
    shippingAddress={shippingAddress} 
    favouriteProducts={favouriteProducts} />
  )
}

export default Page

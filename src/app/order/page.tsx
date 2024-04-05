import CartLoginDialog from '@/components/cart/CartLoginDialog'
import OrderMain from '@/components/order/OrderMain'
import { confirmAndGetPlaceOrderItems } from '@/lib/actions'
import { authOptions } from '@/lib/auth/auth'
import { getServerSession } from 'next-auth'

type Props = {
    searchParams: {
        t: string
    }
}

const page = async (props: Props) => {
    const session = await getServerSession(authOptions)
    if (!session) {
        return <div className='min-h-[93vh] flex items-center justify-center max-w-xl mx-auto'>
            <CartLoginDialog 
            props={props}
            buttonLabel='CLick Here To Login' />
        </div>
    }

    const userId = session.user?.id as string
    const { t } = props.searchParams

    const { data, message } = await confirmAndGetPlaceOrderItems(t, userId)
    if (!data) return (
        <p>{message}</p>
    )

    return (
        <div className='w-screen'>
            <OrderMain
            products={data.products}
            orderInfo={data.orderInfo}
            />
        </div>
    )
}

export default page
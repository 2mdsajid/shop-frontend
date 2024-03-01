import OrderMain from '@/components/order/OrderMain'
import { confirmAndGetPlaceOrderItems } from '@/lib/actions'
import { authOptions } from '@/lib/auth/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    searchParams: {
        t: string
    }
}

const page = async (props: Props) => {
    const session = await getServerSession(authOptions)
    if (!session) redirect('/')

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
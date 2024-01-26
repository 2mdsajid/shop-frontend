import CheckoutMain from '@/components/checkout/CheckoutMain'
import { getCheckoutItems } from '@/lib/actions'
import { TCartItemInLocalstorage, TItemForCheckout } from '@/lib/global-types'
import { decodeCheckoutToken } from '@/lib/utils'
import React from 'react'

type Props = {
    searchParams: {
        t: string
    }
}

const page = async (props: Props) => {
    const { t } = props.searchParams
    const data = decodeCheckoutToken(t)
    const items = getCheckoutItems(data)
    return (
        <div className='w-screen'>
            <CheckoutMain data={items} />
        </div>
    )
}

export default page
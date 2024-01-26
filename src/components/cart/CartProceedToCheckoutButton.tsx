'use client'

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { TItemForCheckout } from '@/lib/global-types'
import { getCheckoutToken } from '@/lib/actions'

type Props = {
    items: TItemForCheckout[]
}

const CartProceedToCheckoutButton = (props: Props) => {
    const router = useRouter()
    const items = props.items
    const proceedToCheckout = async () => {
        try {
            const token = await getCheckoutToken(items)
            router.push(`/checkout?t=${token}`)
        } catch (error) {
        }
    }

    return (
        <Button className="w-full mt-4 bg-orange-500 text-white" onClick={proceedToCheckout}>PROCEED TO CHECKOUT</Button>
    )
}

export default CartProceedToCheckoutButton
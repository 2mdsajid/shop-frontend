'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { TItemForCheckout } from '@/lib/global-types'
import { getCheckoutToken } from '@/lib/actions'
import { toast } from '@/components/ui/use-toast'

type Props = {
    items: TItemForCheckout[]
}

const CartProceedToCheckoutButton = (props: Props) => {
    const router = useRouter()
    const items = props.items
    const proceedToCheckout = async () => {
        try {
            const { data: token, message } = await getCheckoutToken(items)
            if (!token) {
                return toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: message
                })
            }
            router.push(`/checkout?t=${token}`)
        } catch (error: any) {
            return toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Some Error occurred!'
            })
        }
    }

    return (
        <Button className="w-full mt-4 bg-orange-500 text-white" onClick={proceedToCheckout}>PROCEED TO CHECKOUT</Button>
    )
}

export default CartProceedToCheckoutButton
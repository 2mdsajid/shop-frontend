'use client'

import { getCheckoutToken } from '@/lib/actions'
import React from 'react'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'
import { IoBagHandleOutline } from 'react-icons/io5'

type Props = {
    productId: string
}

const BuyNowButton = (props: Props) => {
    const router = useRouter()

    const { productId } = props

    const proceedToCheckout = async () => {
        const items = [{
            id: productId,
            quantity: 1,
        }]
        const { data, message } = await getCheckoutToken(items)
        if (!data) {
            return toast({
                variant: "destructive",
                title: "warning",
                description: message,
            })
        }
        router.push(`/checkout?t=${data}`)
    }

    return (
        <button onClick={proceedToCheckout} className=' px-2 py-2 rounded-md shadow flex items-center gap-1 hover:scale-110 transform transition-transform duration-100'>
            <IoBagHandleOutline
                size={20}
            />
            <span className="text-sm">Get</span>
        </button>
    )
}

export default BuyNowButton
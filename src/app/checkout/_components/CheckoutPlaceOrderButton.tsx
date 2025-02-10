'use client'

import { getPlaceOrderToken } from '@/lib/actions'
import { TItemForPlaceOrderToken } from '@/lib/global-types'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { toast } from '../ui/use-toast'

type Props = {
  items: TItemForPlaceOrderToken[]
}

const CheckoutPlaceOrderButton = (props: Props) => {
  const router = useRouter()
  const items = props.items
  const proceedToCheckout = async () => {
    try {
      const { data: token, message } = await getPlaceOrderToken(items)
      if (!token) {
        return toast({
          variant: 'destructive',
          title: 'Error',
          description: message
        })
      }
      router.push(`/order?t=${token}`)
    } catch (error: any) {
      return toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message
      })
    }
  }

  return (
    <Button className="w-full mt-4 bg-orange-500 text-white" onClick={proceedToCheckout}>PLACE ORDER</Button>
  )
}

export default CheckoutPlaceOrderButton
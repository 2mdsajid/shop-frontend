'use client'

import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import { createOrder } from '@/lib/actions/order.actions'
import { TCreateOrder, TCreateOrderItem } from '@/lib/schema/order.schema'
import { useRouter } from 'next/navigation'

type Props = {
  items: TCreateOrderItem[]
  selectedShippingAddressId: string | null
}

const CheckoutPlaceOrderButton = (props: Props) => {
  const router = useRouter()

  const { items, selectedShippingAddressId } = props

  const proceedToCheckout = async () => {
    try {

      if (!selectedShippingAddressId) {
        return toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Shipping address is required'
        })
      }

      const createOrderData: TCreateOrder = {
        shippingAddressId: selectedShippingAddressId,
        items: items
      }
      

      const { data: orderToken, message } = await createOrder(createOrderData)
      console.log('ordertttttttttooooooooo', orderToken)
      if (!orderToken) {
        return toast({
          variant: 'destructive',
          title: 'Error',
          description: message
        })
      }
      router.push(`/order?t=${orderToken}`)
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
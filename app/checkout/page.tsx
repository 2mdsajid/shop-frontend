import ErrorPage from '@/components/reusable/ErrorPage'
import { getCheckoutItems } from '@/lib/actions/checkout.actions'
import React from 'react'
import CheckoutMain from './_components/CheckoutMain'
import { getShippingAddress } from '@/lib/actions/shipping.actions'
import { getCurrentAddress } from '@/lib/actions/user.actions'

type Props = {
  searchParams: Promise<{
    t: string
  }>
}

const page = async (props: Props) => {
  const { t } = await props.searchParams
  const { data: checkoutItems, message } = await getCheckoutItems(t)

  if (!checkoutItems || checkoutItems.length === 0) {
    return <ErrorPage message={message} />
  }

  const IPData = await getCurrentAddress()


  const { 
    data: shippingAddress, 
    message: shippingAddressMessage } = await getShippingAddress()

  return (
    <div >
      <CheckoutMain data={checkoutItems} shippingAddress={shippingAddress} IPData={IPData} />
    </div>
  )
}

export default page
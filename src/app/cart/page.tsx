import CartDisplay from '@/components/cart/CartDisplay'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen'>
      <CartDisplay />
    </div>
  )
}

export default page
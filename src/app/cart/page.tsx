import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
import CartDisplayMain from '@/components/cart/CartDisplayMain';
// const CartDisplayMain = dynamic(() => import('@/components/cart/CartDisplayMain'), {
//   ssr: false,
// });

type Props = {}

const page = (props: Props) => {
  console.log("🚀 ~ page ~ props:", props)
  return (
    <div className='w-screen'>
      <Suspense fallback={<>Loading Cart Items...</>}>
        <CartDisplayMain />
      </Suspense>
    </div>
  )
}

export default page
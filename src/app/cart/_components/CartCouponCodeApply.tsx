import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

type Props = {}

const CartCouponCodeApply = (props: Props) => {
    return (
        <div className="mt-4">
            <Input className="mb-2" placeholder="Enter Voucher Code" />
            <Button className="w-full">APPLY</Button>
        </div>
    )
}

export default CartCouponCodeApply
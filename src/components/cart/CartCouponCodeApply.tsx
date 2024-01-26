import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

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
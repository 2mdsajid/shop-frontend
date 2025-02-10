'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

type Props = {
    id: string
    quantity: number
    itemsLeft?: number
    setQuantityFunction: (type: 'i' | 'd', id: string, itemsLeft?: number) => void
    setQuantityFunctionForInput: (e: React.ChangeEvent<HTMLInputElement>, id: string, itemsLeft?: number) => void
}

const CartQuantityCounter = (props: Props) => {
    const { id, quantity, itemsLeft, setQuantityFunction, setQuantityFunctionForInput } = props
    return (
        <div className="flex items-center space-x-2">
            <Button className='bg-gray-200 text-gray-800'
                onClick={(e) => {
                    setQuantityFunction('d', id, itemsLeft)
                }}>-</Button>
            <Input className="w-12 text-center" type="text" value={quantity} onChange={(e) => setQuantityFunctionForInput(e, id, itemsLeft)} />
            <Button className='bg-gray-200 text-gray-800'
                onClick={(e) => {
                    setQuantityFunction('i', id, itemsLeft)
                }}>+</Button>
        </div>
    )
}

export default CartQuantityCounter
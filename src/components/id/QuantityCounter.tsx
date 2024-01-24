'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { addToCart } from '@/lib/actions'

type Props = {
    productId: string
    itemsLeft?: number
}

const QuantityCounter = (props: Props) => {
    const { itemsLeft, productId } = props
    const [quantity, setQuantity] = useState(0)
    const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
    
        if (!val.trim()) {
            setQuantity(0);
            return;
        }
    
        const num = parseInt(val, 10);
    
        if (isNaN(num) || num < 1) {
            setQuantity(0);
            return;
        }
        if ( (itemsLeft && num > itemsLeft)) {
            setQuantity(itemsLeft);
            return;
        }
    
        setQuantity(num);
    };

    const decreaseQuantity = () => {
        if (quantity == 1) return
        setQuantity((oldValue) => oldValue - 1)
    }

    const increaseQuantity = () => {
        if (itemsLeft && itemsLeft === quantity) return
        setQuantity((oldValue) => oldValue + 1)
    }

    return (
        <div className='space-y-3'>
            <div className="flex items-center space-x-4 mt-4">
                <span className="text-sm font-medium">Quantity</span>
                <div className="flex items-center space-x-2">
                    <Button className="bg-gray-200 text-gray-600" onClick={decreaseQuantity}>-</Button>
                    <Input className="w-12 text-center" type="text" value={quantity} onChange={changeQuantity} />
                    <Button className="bg-gray-200 text-gray-600" onClick={increaseQuantity}>+</Button>
                </div>
                {itemsLeft && <span className="text-sm text-gray-500"> Items Left : {itemsLeft}</span>}
            </div>
            <div className="flex space-x-4">
                <Button className="bg-blue-500 text-white py-2 px-6">Buy Now</Button>
                <Button className="bg-orange-500 text-white py-2 px-6" onClick={() => addToCart(productId)}>Add to Cart</Button>
            </div>
        </div>
    )
}

export default QuantityCounter
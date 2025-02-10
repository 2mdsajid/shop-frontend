import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { TProductBase } from '@/lib/schema/product.schema'
import { formatDate } from '@/lib/utils'

type Props = {
    product: TProductBase
}

const WishListProductCard = (props: Props) => {
    const currentDate = new Date()

    const { product } = props
    return (
        <Card key={product.id} className="overflow-hidden">
            <div className="relative">
                <div className="aspect-square relative">
                    <Image
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                    <X className="h-4 w-4 text-brand-secondary" />
                </Button>
            </div>
            <CardContent className="p-4">
                <div className="mb-2">
                    <h3 className="font-medium text-brand-secondary line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-neutral-text-secondary">{formatDate(currentDate)}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-brand-secondary font-medium">₹{product.price.toFixed(2)}</p>
                    <Button size="sm" className="bg-brand-secondary hover:bg-brand-dark text-brand-light text-xs">
                        ADD TO CART
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default WishListProductCard
// generate a product card detailed component
"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import AddToFavouriteButton from "./AddToFavouriteButton"

interface ProductCardDetailedProps {
    category: string
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    isFreeDelivery: boolean
    availableStock: number
    brand: string | null
    images: string[]
    isNew: boolean | null
}

export function ProductCardDetailed({
    category,
    id,
    name,
    description,
    price,
    imageUrl,
    isFreeDelivery,
    availableStock,
    brand,
    images,
    isNew
}: ProductCardDetailedProps) {
    return (
        <Link href={`/product/${id}`}>
            <div className="group relative rounded-lg border p-4 hover:shadow-lg transition-shadow">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                        src={imageUrl || images[0] || "/placeholder.svg"}
                        alt={name}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    />
                    <AddToFavouriteButton productId={id} />
                    {isNew && (
                        <div className="absolute top-2 left-2 bg-amber-100/90 px-2 py-1 rounded-md">
                            <span className="text-sm font-medium flex items-center gap-1">
                                HOT 🔥
                            </span>
                        </div>
                    )}
                </div>

                <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                        <p className="text-lg font-semibold text-gray-900">₹{price.toFixed(2)}</p>
                    </div>

                    {brand && (
                        <p className="text-sm text-gray-500">Brand: {brand}</p>
                    )}

                    <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

                    <div className="flex items-center justify-between text-sm">
                        {/* <p className="text-gray-500">Category: {category.replace(/_/g, ' ')}</p> */}
                        <p className={`${availableStock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {availableStock > 0 ? `${availableStock} in stock` : 'Out of stock'}
                        </p>
                        {isFreeDelivery && (
                            <div className="flex items-center gap-1 text-sm text-green-600">
                                <Truck className="h-4 w-4" />
                                <span>Free Delivery</span>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </Link>
    )
}

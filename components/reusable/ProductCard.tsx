"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { addToFavourite } from "@/lib/actions/product.actions"
import { toast } from "@/hooks/use-toast"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  discount: {
    isActive: boolean
    value: number
  } | null
}

export function ProductCard({ id, name, price, image, discount }: ProductCardProps) {
  
  const discountedPrice = discount?.isActive ? (price - (discount.value)) : price

  const handleAddToFavourite = async (e: any) => {
    e.preventDefault()
    const { data, message } = await addToFavourite(id)
    if (!data) {
      return toast({
        title: "Error adding to favourites",
        description: message,
        variant: "destructive",
      })
    }
    return toast({
      title: "Added to favourites",
      variant: "success",
      description: message,
    })
  }

  return (
    <Link href={`/product/${id}`} className="block">
      <div className="group relative">
        {/* Product Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
          {/* Favourite Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleAddToFavourite}
            className="absolute right-2 top-2 z-10 rounded-full bg-white/80 backdrop-blur-sm"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        {/* Product Details */}
        <div className="mt-4 flex flex-col items-center text-center">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          
          {/* Price & Discount */}
          <div className="mt-1 text-sm flex gap-2">
            {discount?.isActive && (
              <span className="text-gray-500 line-through">₹ {price.toFixed(2)}</span>
            )}
            <span className="text-gray-900 font-semibold">₹ {discountedPrice.toFixed(2)}</span>
          </div>
          
          {/* Discount Badge */}
          {discount?.isActive && (
            <span className="mt-1 text-xs text-red-600 font-medium bg-red-100 px-2 py-1 rounded-md">
              {discount.value} OFF
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

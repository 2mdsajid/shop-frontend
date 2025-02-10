import { TDiscountBase } from "@/lib/schema/product.schema"
import { Truck } from "lucide-react"

type Props = {
  name: string
  price: number
  isFreeDelivery: boolean
  discountObject: TDiscountBase | null
}

const ProductHeader = (props: Props) => {
  const { name, price, isFreeDelivery, discountObject } = props
  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#1B3B5C]">{name}</h1>
      {discountObject && discountObject.isActive ? (
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold line-through text-gray-500">₹{price.toFixed(2)}</span>
          <span className="text-xl font-semibold text-red-600">₹{(price - discountObject.value).toFixed(2)}</span>
          <span className="text-sm text-gray-600">Price inclusive of all taxes.</span>
        </div>
      ) : (
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹{price.toFixed(2)}</span>
          <span className="text-sm text-gray-600">Price inclusive of all taxes.</span>
        </div>
      )}
      {isFreeDelivery && (
        <span className="text-sm text-green-600 flex items-center gap-2">
          <Truck className="h-4 w-4" />
          Free Shipping.
        </span>
      )}

    </div>
  )
}

export default ProductHeader
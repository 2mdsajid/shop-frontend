import { PriceRangeCard } from "@/components/reusable/PriceRangeCard"
import { priceRanges } from "@/lib/data"



export async function PriceRangeShowcase() {
  
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-teal-800">⭐ FIND YOUR PERFECT MATCH ⭐</h2>
        <p className="mt-2 text-sm text-gray-600">Great Choices at Every Price</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {priceRanges.map((range) => (
          <PriceRangeCard key={range.price} price={range.price} color={range.color} />
        ))}
      </div>
    </div>
  )
}


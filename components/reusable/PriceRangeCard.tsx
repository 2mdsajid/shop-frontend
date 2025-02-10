interface PriceRangeCardProps {
    price: string
    color: "pink" | "blue"
  }
  
  export function PriceRangeCard({ price, color }: PriceRangeCardProps) {
    return (
      <div className="group relative mx-auto w-full max-w-[300px] cursor-pointer transition-transform hover:-translate-y-1">
        <div
          className={`relative rounded-t-xl bg-cream-50 p-6 text-center shadow-sm ${
            color === "pink" ? "text-teal-800" : "text-teal-900"
          }`}
        >
          <div className="text-lg font-medium">GIFT UNDER</div>
          <div className="text-4xl font-bold">{price}</div>
        </div>
        <div className={`relative h-16 rounded-b-xl shadow-sm ${color === "pink" ? "bg-pink-200" : "bg-blue-200"}`}>
          <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 transform">
            <div className="absolute h-full w-full rounded-full bg-pink-400"></div>
          </div>
        </div>
      </div>
    )
  }
  
  

import { TBasicBagInfo } from "@/lib/global-types"
import DisplayCategory from "./DisplayCategory"
import DisplayImages from "./DisplayImages"
import DisplayPrice from "./DisplayPrice"
import DisplayServicesInfo from "./DisplayServicesInfo"
import QuantityCounter from "./QuantityCounter"

export default function SingleProductDisplay(props: TBasicBagInfo) {
  const { id, name, price, imageUrl, images, brand, category, isNew, hasDiscount } = props
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <DisplayImages
            name={name}
            image={imageUrl}
            images={images}
            isFreeDelivery={true}
          />
        </div>

        <div className="col-span-1 space-y-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <DisplayCategory category={category} />
          <DisplayPrice
            hasDiscount={hasDiscount}
            price={price}
          />
          <QuantityCounter
            productId={id}
            itemsLeft={15}
          />
        </div>

        <div className="col-span-1 space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Service</h2>
            <DisplayServicesInfo />
          </div>

        </div>

      </div>
    </div >
  )
}





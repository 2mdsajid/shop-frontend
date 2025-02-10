
import { TProductDetail } from "@/lib/schema/product.schema"
import ProductHeader from "./ProductHeader"
import ProductImages from "./ProductImages"
import ProductDetailsTabs from "./ProductsDetailsTabs"
import ActionButtons from "./WishListAddButton"

export default function SingleProductDisplay(props: TProductDetail) {
  const { id, name, price, imageUrl, images, brand, description, isFreeDelivery, category, isNew, discount, specifications, careInstructions } = props

  return (
    <div className="container mx-auto px-4 md:px-0 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left column - Images */}
        <ProductImages images={images} imageUrl={imageUrl} name={name} />

        {/* Right column - Product info */}
        <div className="flex flex-col gap-6">
          <ProductHeader
            name={name}
            price={price}
            isFreeDelivery={isFreeDelivery}
            discountObject={discount}
          />
          <ActionButtons
            productId={id}
          />
          
          {/* <RedeemCouponButton
            productId={id}
            couponCode={couponCode}
          /> */}
          
          <ProductDetailsTabs
            description={description}
            specifications={specifications}
            careInstructions={careInstructions}
            brand={brand}
            countryOfOrigin={'India'}
          />
        </div>
      </div>
    </div>
  )
}

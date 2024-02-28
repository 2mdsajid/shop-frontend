import { TOrderInfo, TOrderProduct } from "@/lib/global-types"
import OrderBillingAddress from "./OrderBillingAddress"
import OrderDeliveryAddress from "./OrderDeliveryAddress"
import OrderFooter from "./OrderFooter"
import OrderHeaderDetails from "./OrderHeaderDetails"
import OrderProductsTable from "./OrderProductsTable"
import OrderTotalPrice from "./OrderTotalPrice"
import OrderInfo from "./OrderInfo"

type Props = {
  products: TOrderProduct[]
  orderInfo: TOrderInfo
}

export default function OrderMain(props: Props) {
  const { products, orderInfo } = props
  const totalAmount = () => {
    let total = 0
    products.forEach(product => total += (product.price * product.quantity))
    return total
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg space-y-3">
      <OrderHeaderDetails />
      <OrderInfo {...orderInfo} />
      <OrderProductsTable products={products} />
      <OrderTotalPrice
        totalAmount={totalAmount()}
        // change this delivery amount according to database not hardcoded
        deliveryAmount={120}
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <OrderDeliveryAddress />
        <OrderBillingAddress />
      </div>
      <OrderFooter />
    </div>
  )
}


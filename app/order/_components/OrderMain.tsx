import AddressCard from "./AddressCard"
import OrderHeaderDetails from "./OrderHeaderDetails"
import OrderFooter from "./OrderFooter"
import OrderInfo from "./OrderInfo"
import OrderProductsTable from "./OrderProductsTable"
import OrderTotalPrice from "./OrderTotalPrice"
import { TOrderDetail } from "@/lib/schema/order.schema"

// Main OrderMain Component
const OrderMain = ({ orderDetails }: { orderDetails: TOrderDetail }) => {
  const { orderItems, shippingAddress, orderedBy, orderToken, createdAt, status, id: orderId } = orderDetails

  const totalAmount = orderItems?.reduce((total, item) => total + item.price * item.quantity, 0) || 0

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg space-y-6">
      <OrderHeaderDetails orderedBy={orderedBy} />
      <OrderInfo id={orderId} orderToken={orderToken} createdAt={createdAt} status={status} />
      {orderItems && <OrderProductsTable items={orderItems} />}
      <OrderTotalPrice totalAmount={totalAmount} deliveryAmount={120} />
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        {shippingAddress && <AddressCard title="Delivery Address" address={shippingAddress} />}
        {shippingAddress && <AddressCard title="Billing Address" address={shippingAddress} />}
      </div>
      <OrderFooter orderedBy={orderedBy} />
    </div>
  )
}

export default OrderMain
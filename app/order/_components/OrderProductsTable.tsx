import { Card, CardContent } from "@/components/ui/card"
import { TOrderItemBase } from "@/lib/schema/order.schema"

// OrderProductsTable Component
const OrderProductsTable = ({ items }: { items: TOrderItemBase[] }) => {
    return (
      <Card className="mb-6 p-4 bg-white rounded-lg shadow-sm">
        <CardContent>
          <h2 className="text-xl font-bold text-brand-secondary mb-3">Order Summary</h2>
          {items.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center mb-3 pb-3 border-b border-neutral-border last:border-b-0"
            >
              <div className="flex items-center space-x-4">
                <img
                  alt={item.product.name}
                  className="h-16 w-16 rounded-md object-cover"
                  src={item.product.imageUrl || "/placeholder.svg"}
                />
                <div>
                  <h3 className="font-semibold text-brand-secondary">{item.product.name}</h3>
                  <p className="text-sm text-neutral-text-secondary">Quantity: {Math.round(item.quantity)}</p>
                  <p className="text-sm text-neutral-text-secondary">Price: ₹{Math.round(item.price)}</p>
                  <p className="text-sm text-neutral-text-muted">Category: {item.product.category}</p>
                </div>
              </div>
              <p className="font-semibold text-brand-primary">₹{Math.round(item.price) * Math.round(item.quantity)}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

  export default OrderProductsTable
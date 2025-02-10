import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";

// OrderTotalPrice Component
const OrderTotalPrice = ({
    totalAmount,
    deliveryAmount,
    discountAmount = 0,
  }: { totalAmount: number; deliveryAmount: number; discountAmount?: number }) => {
    return (
      <Card className="space-y-2 bg-brand-light p-4 rounded-md shadow-sm">
        <CardContent className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-neutral-text-secondary">Subtotal:</p>
            <p className="text-neutral-text-primary font-semibold">₹{Math.round(totalAmount)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-neutral-text-secondary">Shipping:</p>
            <p className="text-neutral-text-primary font-semibold">₹{Math.round(deliveryAmount)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-neutral-text-secondary">Discount:</p>
            <p className="text-neutral-text-primary font-semibold">₹{Math.round(discountAmount)}</p>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-brand-secondary">Total:</p>
            <p className="text-lg font-bold text-brand-primary">
              ₹{Math.round(totalAmount) + Math.round(deliveryAmount) - Math.round(discountAmount)}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  export default OrderTotalPrice
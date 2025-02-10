import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Props = {
    productId: string
    couponCode: string
}

const RedeemCouponButton = (props: Props) => {
    const { productId, couponCode } = props

    return (
      <div className="space-y-2">
        <p className="text-sm font-medium">Estimated Delivery Date</p>
        <div className="flex gap-2">
          <Input type="text" placeholder="Enter your pincode" className="flex-1" />
          <Button variant="secondary">Check</Button>
        </div>
        <p className="text-sm text-blue-600">Express delivery is available at checkout for selected pincodes.</p>
      </div>
    )
  }

export default RedeemCouponButton
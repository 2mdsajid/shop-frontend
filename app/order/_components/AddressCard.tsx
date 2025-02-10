import { Card, CardContent } from "@/components/ui/card";
import { TBaseShippingAddress } from "@/lib/schema/shipping.schema";

// OrderDeliveryAddress and OrderBillingAddress Components
const AddressCard = ({ title, address }: { title: string; address: TBaseShippingAddress }) => {
    return (
      <Card className="flex-1 bg-white shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold text-brand-secondary mb-2">{title}:</h3>
          <p className="text-sm text-neutral-text-secondary">{address.fullName}</p>
          <p className="text-sm text-neutral-text-secondary">{address.phoneNumber}</p>
          <p className="text-sm text-neutral-text-secondary">{address.address}</p>
          <p className="text-sm text-neutral-text-secondary">
            {address.city}, {address.state} {address.pincode}
          </p>
        </CardContent>
      </Card>
    )
  }

  export default AddressCard
"use client"

import type { TBaseShippingAddress } from "@/lib/schema/shipping.schema"
import CheckoutChangeDeliveryDialog from "./CheckoutChangeDeliveryDialog"
import { Banknote, MapPin, Truck } from "lucide-react"
import type { TLocationFromIpApi } from "@/lib/schema/user.schema"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

type Props = {
  IPData: TLocationFromIpApi | null
  freeDeliveryInfo?: boolean
  shippingAddress: TBaseShippingAddress[] | null
  selectedShippingAddress: string | null
  handleChangeShippingAddress: (shippingAddressId: string) => void
}

const DisplayDeliveryInfo = (props: Props) => {
  const { IPData, freeDeliveryInfo, shippingAddress, selectedShippingAddress, handleChangeShippingAddress } = props

  const onHandleChangeShippingAddressClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    handleChangeShippingAddress(e.target.value)
  }

  return (
    <Card className="w-full space-y-4 bg-gradient-to-r from-pink-50 to-purple-50 p-6 shadow-md">
      <h2 className="text-2xl font-bold text-purple-600 flex items-center gap-2">
        <MapPin className="h-6 w-6" />
        Delivery Address
      </h2>

      {shippingAddress && shippingAddress.length > 0 ? (
        <CardContent className="space-y-4 bg-white rounded-lg shadow-sm p-4">
          {shippingAddress.map((address) => (
            <div
              key={address.id}
              className="flex items-center cursor-pointer hover:bg-purple-50 p-3 rounded-md transition-colors duration-200"
              onClick={() => handleChangeShippingAddress(address.id)}
            >
              <input
                type="radio"
                id={`address-${address.id}`}
                name="address"
                value={address.id}
                className="mr-3 h-4 w-4 text-purple-600 focus:ring-purple-500"
                checked={selectedShippingAddress === address.id}
                onChange={onHandleChangeShippingAddressClick}
              />
              <div className="text-sm">
                <p className="font-medium text-gray-800">
                  {address.fullName}, {address.phoneNumber}
                </p>
                <p className="text-gray-600">
                  {address.address}, {address.city}, {address.state} - {address.pincode}
                </p>
              </div>
            </div>
          ))}
          <CheckoutChangeDeliveryDialog countryOfOrigin={"India"} />
        </CardContent>
      ) : (
        <CardContent className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-gray-600 mb-2">No shipping address found</p>
          <CheckoutChangeDeliveryDialog countryOfOrigin={"India"} />
        </CardContent>
      )}

      <CardContent className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
          <Truck className="h-5 w-5" />
          Free Delivery
        </h3>
        {freeDeliveryInfo ? (
          <div>
            <p className="font-medium">28 Jan - 29 Jan (3 - 4 days)</p>
            <div className="text-sm mt-1">Enjoy free shipping on orders over ₹699 from Aafinaya.</div>
          </div>
        ) : (
          <div>
            <p>Not available for this order</p>
          </div>
        )}
      </CardContent>
      <div className="flex gap-2 items-center text-gray-700 bg-yellow-50 p-3 rounded-lg">
        <Banknote className="h-5 w-5 text-yellow-600" />
        <span className="font-medium">Cash on Delivery Available</span>
      </div>
    </Card>
  )
}

export default DisplayDeliveryInfo


"use client"

import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { createShippingAddress } from "@/lib/actions/shipping.actions"
import { TCreateShippingAddress } from "@/lib/schema/shipping.schema"
import { useRouter } from "next/navigation"
type Props = {
    countryOfOrigin: string
    shippingAddress?: TCreateShippingAddress | null
}


const CheckoutChangeDeliveryDialog = (props: Props) => {
    const { countryOfOrigin, shippingAddress } = props
    const router = useRouter()
  
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = React.useState<TCreateShippingAddress>(shippingAddress || {
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, message } = await createShippingAddress(formData)
    if (!data) {
        return toast({
            title: 'Error',
            description: message,
            variant: 'destructive'
        })
    }
    setOpen(false)
    router.refresh()
    return toast({
        title: 'Shipping Address',
        description: 'Shipping Address Created Successfully!',
        variant: 'success'
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Shipping Address</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Shipping Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <Input
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="pincode"
                name="pincode"
                placeholder="PIN Code"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <p className="text-sm text-gray-500">Country of Origin: {countryOfOrigin}</p>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CheckoutChangeDeliveryDialog
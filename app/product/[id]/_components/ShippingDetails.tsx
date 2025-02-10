'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Props = {
    countryOfOrigin: string
}

const ShippingDetails = (props: Props) => {
  const { countryOfOrigin } = props
  
  const [open, setOpen] = React.useState(false)

  type ShippingFormData = {
    fullName: string
    phoneNumber: string
    address: string
    city: string
    state: string
    pincode: string
  }

  const [formData, setFormData] = React.useState<ShippingFormData>({
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle shipping form submission
    console.log(formData)
    setOpen(false)
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
        <Button variant="outline">Check Shipping Details</Button>
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

export default ShippingDetails
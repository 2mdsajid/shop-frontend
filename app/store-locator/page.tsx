import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Store Locator</h1>
      <p className="mb-4">
        Find a NewPurse store near you! Visit our locations to explore our latest collections and exclusive in-store offers.
      </p>
      {/* Example Store Location */}
      <div className="border p-4 mb-4 rounded">
        <h2 className="text-xl font-semibold">NewPurse Downtown</h2>
        <p className="text-gray-600">123 Main Street, Downtown City</p>
        <p className="text-gray-600">Phone: (123) 456-7890</p>
        <p className="text-gray-600">Hours: Mon-Sat 10am - 8pm, Sun 12pm - 6pm</p>
      </div>
      {/* Add more store locations as needed */}
    </div>  )
}

export default page
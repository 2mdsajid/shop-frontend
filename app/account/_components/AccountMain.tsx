"use client"

import WishListProductCard from '@/components/reusable/WishListProductCard'
import { Button } from '@/components/ui/button'
import { TProductBase } from '@/lib/schema/product.schema'
import { TBaseShippingAddress } from '@/lib/schema/shipping.schema'
import { Heart, Package } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
    orders: {
        id: string
        createdAt: Date
        status: string
    }[] | undefined
    shippingAddress: TBaseShippingAddress[] | null
    favouriteProducts: TProductBase[] | null
}

const accountLinks = [
    {
      title: "PURCHASE HISTORY",  
      id: "purchases",
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: "SHIPPING ADDRESS",
      id: "shipping-address",
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: "FAVOURITES",
      id: "wishlist",
      icon: <Heart className="h-6 w-6" />,
    },
  ]


const AccountMain = (props: Props) => {
    const [activeTab, setActiveTab] = useState("purchases")

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-serif text-brand-primary text-center mb-8">My Account</h1>

    {/* Tabs Navigation */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
      {accountLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => setActiveTab(link.id)}
          className={`p-4 rounded-lg transition-colors duration-200 ${
            activeTab === link.id ? 'bg-brand-dark text-brand-light' : 'bg-brand-secondary'
          }`}
        >
          <div className="flex items-center space-x-2">
            {link.icon}
            <span className="text-sm font-medium">{link.title}</span>
          </div>
        </button>
      ))}
    </div>

    {/* Tab Content */}
    <div className="max-w-4xl mx-auto">
      {activeTab === "purchases" && (
        <div>
          <h2 className="text-2xl font-serif text-brand-primary mb-6">My Purchases</h2>
          {props.orders && props.orders.length > 0 ? (
            <ul>
              {props.orders.map((order) => (
                <li key={order.id} className="border-b py-2">
                  Order ID: {order.id} - Status: {order.status}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-12 px-4">
              <p className="text-brand-secondary mb-6">You haven't placed any orders yet.</p>
              <Button asChild className="bg-brand-secondary hover:bg-brand-dark text-brand-light transition-colors">
                <Link href="/">CONTINUE SHOPPING</Link>
              </Button>
            </div>
          )}
        </div>
      )}

      {activeTab === "shipping-address" && (
        <div>
          <h2 className="text-2xl font-serif text-brand-primary mb-6">Shipping Address</h2>
          {props.shippingAddress && props.shippingAddress.length > 0 ? (
            <ul>
              {props.shippingAddress.map((address) => (
                <li key={address.id}>{address.address}</li>
              ))}
            </ul>
          ) : (
            <p className="text-brand-secondary">No shipping addresses saved.</p>
          )}
        </div>
      )}

      {activeTab === "wishlist" && (
        <div>
          <h2 className="text-2xl font-serif text-brand-primary mb-6">Favourites</h2>
          <p className="text-brand-secondary">Your favourite items will appear here.</p>
          {props.favouriteProducts && props.favouriteProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {props.favouriteProducts.map((product) => (
                <WishListProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-brand-secondary">No favourite items saved.</p>
          )}
        </div>
      )}
    </div>
  </div>
  )
}

export default AccountMain
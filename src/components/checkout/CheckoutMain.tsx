'use client'

import { getCartItems } from "@/lib/actions"
import { TBasicBagInfo, TCartItemInLocalstorage, TItemForCheckout } from "@/lib/global-types"
import { useState } from "react"
import NoCartItemFound from "@/components/reusable/NoCartItemFound"
import DisplayDetails from "@/components/cart/DisplayDetails"
import DisplayOrderSummary from "@/components/cart/DisplayOrderSummary"
import CheckoutItemCounts from "./CheckoutItemCounts"



type Props = {
    data: TCartItemInLocalstorage[]
}

export default function CheckoutMain(props: Props) {
    const [cartItems, setCartItems] = useState<TCartItemInLocalstorage[]>(props.data)

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.quantity * (item.details.price - (item.details?.hasDiscount?.state ? item.details.hasDiscount.value : 0));
        });
        return total;
    };


    const calculateTotalQuantity = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.quantity
        });
        return total;
    }

    return (
        <div className="w-full">
            {cartItems.length === 0 ? <NoCartItemFound /> :
                <div className="max-w-7xl mx-auto my-8 p-6 flex flex-col lg:flex-row lg:justify-between gap-8 bg-white shadow-lg rounded-lg">
                    <div className="space-y-6 w-full">
                        {cartItems && cartItems.map((c, i) => {
                            return (
                                <div key={i} className="flex w-full justify-between">
                                    <DisplayDetails
                                        {...c.details}
                                    />
                                    <CheckoutItemCounts
                                        count={c.quantity}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full lg:w-96 bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                        <DisplayOrderSummary
                            itemsCount={calculateTotalQuantity()}
                            total={calculateTotal()}
                            additionalDiscount={0}
                            deliveryCharge={120}
                        />
                    </div>
                </div>}
        </div>
    )
}


"use client"

import { TBaseShippingAddress } from "@/lib/schema/shipping.schema"
import { TCreateOrderItem } from "@/lib/schema/order.schema"
import CheckoutDetails from "./CheckoutDetails"
import CheckoutItemCounts from "./CheckoutItemCounts"
import CheckoutItemPrice from "./CheckoutItemPrice"
import CheckoutItemsTotalPriceOfEachItem from "./CheckoutItemsTotalPriceOfEachItem"
import CheckoutOrderSummary from "./CheckoutOrderSummary"
import CheckoutPlaceOrderButton from "./CheckoutPlaceOrderButton"
import DisplayDeliveryInfo from "./DisplayDeliveryInfo"
import { TCheckoutItemWithProductBase } from "@/lib/schema/checkout.schema"
import { useState } from "react"
import { TLocationFromIpApi } from "@/lib/schema/user.schema"
type Props = {
    data: TCheckoutItemWithProductBase[]
    shippingAddress: TBaseShippingAddress[] | null
    IPData: TLocationFromIpApi | null
}

export default function CheckoutMain(props: Props) {
    const checkOutItems = props.data

    const [selectedShippingAddress, setSelectedShippingAddress] = useState<string | null>(props.shippingAddress?.[0]?.id ?? null)

    const handleChangeShippingAddress = (shippingAddressId: string) => {
        setSelectedShippingAddress(shippingAddressId)
    }

    const calculateTotal = () => {
        let total = 0;
        checkOutItems.forEach((item) => {
            total += item.quantity * (item.product.price - (item.product?.discount?.isActive ? item.product.discount.value : 0));
        });
        return total;
    };


    const calculateTotalQuantity = () => {
        let total = 0;
        checkOutItems.forEach((item) => {
            total += item.quantity
        });
        return total;
    }

    const generatePlaceOrderTokenItems = () => {
        const items = [] as TCreateOrderItem[]
        checkOutItems.forEach((item) => {
            items.push({
                productId: item.product.id,
                price: item.product.price - (item.product?.discount?.isActive ? item.product.discount.value : 0),
                quantity: item.quantity
            })
        });
        return items;
    }

    return (
        <div className="w-[95%] mx-auto ">
            <div className=" mx-auto my-8 p-6 flex flex-col lg:flex-row lg:justify-between gap-8 bg-white shadow-lg rounded-lg">
                    <div className="space-y-6 w-full ">
                        <div className="grid grid-cols-6">
                            <p className="text-xl font-bold col-span-3 ml-2">Info</p>
                            <p className="text-xl font-bold ">Price</p>
                            <p className="text-xl font-bold ">Qty</p>
                            <p className="text-xl font-bold ">Total</p>
                        </div>
                        <div className="w-full md:overflow-auto md:max-h-[70vh] space-y-3">
                            {checkOutItems && checkOutItems.map((c, i) => {
                                return (
                                    <div key={i} className="w-full grid grid-cols-6">
                                        <CheckoutDetails
                                            name={c.product.name}
                                            imageUrl={c.product.imageUrl}
                                            category={c.product.category}
                                        />
                                        <CheckoutItemPrice
                                            price={c.product.price}
                                            discount={c.product.discount}
                                        />
                                        <CheckoutItemCounts
                                            count={c.quantity}
                                        />
                                        <CheckoutItemsTotalPriceOfEachItem
                                            price={c.product.price}
                                            discount={c.product.discount}
                                            quantity={c.quantity}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="w-full space-y-5 lg:w-[35rem] rounded-lg">
                        <CheckoutOrderSummary
                            itemsCount={calculateTotalQuantity()}
                            total={calculateTotal()}
                            additionalDiscount={0}
                            deliveryCharge={120}
                        />
                        <DisplayDeliveryInfo 
                            IPData={props.IPData} 
                            shippingAddress={props.shippingAddress}
                            selectedShippingAddress={selectedShippingAddress}
                            handleChangeShippingAddress={handleChangeShippingAddress}
                        />

                        <CheckoutPlaceOrderButton
                            items={generatePlaceOrderTokenItems()}
                            selectedShippingAddressId={selectedShippingAddress}
                        />
                </div>
            </div>
        </div>
    )
}


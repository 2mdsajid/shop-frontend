'use client'

import { getCartItems } from "@/lib/actions"
import { TBasicBagInfo } from "@/lib/global-types"
import { useState } from "react"
import DisplayDetails from "./DisplayDetails"
import DisplayOrderSummary from "./DisplayOrderSummary"
import CartQuantityCounter from "./CartQuantityCounter"
import CartDeleteItem from "./CartDeleteItem"

type TCartItemInLocalstorage = {
    details: TBasicBagInfo
    quantity: number
}

export default function CartDisplay() {

    const items = getCartItems() as TCartItemInLocalstorage[]
    const [cartItems, setCartItems] = useState<TCartItemInLocalstorage[]>(items)

    const setQuantityFunctionForInput = (e: React.ChangeEvent<HTMLInputElement>, id: string, itemsLeft?: number) => {
        const val = e.currentTarget.value;
        if (!val.trim()) {
            return;
        }
        const num = parseInt(val, 10);
        if (isNaN(num) || num < 1) {
            return;
        }
        // Find the item by ID and update its quantity
        setCartItems(prevCartItems => {
            return prevCartItems.map(item => {
                if (item.details.id === id) {
                    // Use the same conditions as in setQuantityFunctionForInput
                    const newQuantity = Math.max(1, Math.min(num, itemsLeft || num));

                    return {
                        ...item,
                        quantity: newQuantity,
                    };
                }
                return item;
            });
        });
    };


    const setQuantityFunction = (type: 'i' | 'd', id: string, itemsLeft?: number) => {
        const updatedCartItems = [...cartItems];
        const index = updatedCartItems.findIndex(item => item.details.id === id);
        if (index !== -1) {
            const currentQuantity = updatedCartItems[index].quantity;
            if (type === 'd') {
                // Decrement quantity
                const newQuantity = Math.max(currentQuantity - 1, 1);
                updatedCartItems[index].quantity = newQuantity;
            } else if (type === 'i') {
                // Increment quantity
                const newQuantity = Math.min(currentQuantity + 1, itemsLeft || currentQuantity + 1);
                updatedCartItems[index].quantity = newQuantity;
            }
            setCartItems(updatedCartItems);
        }
    };

    const calculateTotalQuantity = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.quantity
        });
        return total;
    }

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.quantity * (item.details.price - (item.details?.hasDiscount?.state ? item.details.hasDiscount.value : 0));
        });
        return total;
    };

    const deleteCartItem = (id: string) => {
        const updatedCartItems = cartItems.filter(item => item.details.id !== id);
        setCartItems(updatedCartItems);
    };



    return (
        <div className="max-w-7xl mx-auto my-8 p-6 flex flex-col lg:flex-row lg:justify-between gap-8 bg-white shadow-lg rounded-lg">
            <div className="space-y-6 w-full">
                {cartItems && cartItems.map((c, i) => {
                    return (
                        <div key={i} className="flex w-full justify-between">
                            <DisplayDetails
                                {...c.details}
                            />
                            <div className="flex flex-col gap-2">
                                <CartQuantityCounter
                                    id={c.details.id}
                                    quantity={c.quantity}
                                    itemsLeft={c.details.itemsLeft}
                                    setQuantityFunction={setQuantityFunction}
                                    setQuantityFunctionForInput={setQuantityFunctionForInput}
                                />
                                <CartDeleteItem
                                    id={c.details.id}
                                    deleteFunction={deleteCartItem}
                                />
                            </div>
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
        </div>
    )
}


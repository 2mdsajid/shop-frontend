'use client'

import { addToCart, getCartItems, removeFromCart } from "@/lib/actions"
import { TItemForCheckout, TItemInCart } from "@/lib/global-types"
import { useEffect, useState } from "react"
import NoCartItemFound from "../reusable/NoCartItemFound"
import { toast } from "../ui/use-toast"
import CartDeleteItem from "./CartDeleteItem"
import CartProceedToCheckoutButton from "./CartProceedToCheckoutButton"
import CartQuantityCounter from "./CartQuantityCounter"
import DisplayDetails from "./DisplayDetails"
import DisplayOrderSummary from "./DisplayOrderSummary"
import { useSession } from "next-auth/react"
import CartLoginDialog from "./CartLoginDialog"


export default function CartDisplayMain() {

    const { data: session } = useSession()

    const [cartItems, setCartItems] = useState<TItemInCart[]>([])
    const [noItemsFound, setNoItemsFound] = useState(false)

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
            return prevCartItems?.map(item => {
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
        addToCart(id, num)
    };


    // updating the state of quantity in cart items
    const setQuantityFunction = async (type: 'i' | 'd', id: string, itemsLeft?: number) => {
        const updatedCartItems = [...cartItems];
        const index = updatedCartItems.findIndex(item => item.details.id === id);
        if (index !== -1) {
            const currentQuantity = updatedCartItems[index].quantity;
            if (type === 'd') {
                const newQuantity = Math.max(currentQuantity - 1, 1);
                updatedCartItems[index].quantity = newQuantity;
                addToCart(id, newQuantity)
                setCartItems(updatedCartItems);
            } else if (type === 'i') {
                const newQuantity = Math.min(currentQuantity + 1, itemsLeft || currentQuantity + 1);
                updatedCartItems[index].quantity = newQuantity;
                addToCart(id, newQuantity)
                setCartItems(updatedCartItems);
            }
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
        const { state, message } = removeFromCart(id)
        setCartItems(updatedCartItems);
        if (updatedCartItems.length === 0) return setNoItemsFound(true)
        return toast({
            title: state,
            variant: state,
            description: message
        })
    };

    const generateCheckoutItems = () => {
        let items: TItemForCheckout[] = []
        cartItems.forEach((item) => {
            items.push({
                id: item.details.id,
                quantity: item.quantity
            })
        });
        return items;
    }

    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await getCartItems()
            if (items.length === 0) return setNoItemsFound(true)
            setCartItems(items)
        }
        fetchCartItems()
    }, [cartItems])


    return (
        <div className="w-full">
            <div>
                {/* this is fro no item found because it renders something as empty array before rendering the array items in use effect*/}
                {(noItemsFound || cartItems.length === 0) && <NoCartItemFound />}
            </div>
            <div>
                {cartItems.length > 0 &&
                    <div className="max-w-7xl mx-auto my-8 p-6 flex flex-col lg:flex-row lg:justify-between gap-8 bg-white shadow-lg rounded-lg">
                        <div className="space-y-6 w-full">
                            {cartItems.map((c, i) => {
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
                            <DisplayOrderSummary
                                itemsCount={calculateTotalQuantity()}
                                total={calculateTotal()}
                                additionalDiscount={0}
                                deliveryCharge={120}
                            />
                            {session
                                ? <CartProceedToCheckoutButton
                                    items={generateCheckoutItems()}
                                />
                                : <CartLoginDialog />}
                        </div>
                    </div>}
            </div>
        </div>
    )
}


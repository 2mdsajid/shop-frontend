import DisplayDetails from "@/components/cart/DisplayDetails"
import DisplayOrderSummary from "@/components/cart/DisplayOrderSummary"
import NoCartItemFound from "@/components/reusable/NoCartItemFound"
import { TItemForPlaceOrderToken, TItemInCart, TLocationFromIpApi } from "@/lib/global-types"
import CheckoutItemCounts from "./CheckoutItemCounts"
import CheckoutPlaceOrderButton from "./CheckoutPlaceOrderButton"
import DisplayDeliveryInfo from "./DisplayDeliveryInfo"
import { getCurrentAddress } from "@/lib/actions"
import CheckoutDetails from "./CheckoutDetails"
import CheckoutItemPrice from "./CheckoutItemPrice"
import CheckoutItemsTotalPriceOfEachItem from "./CheckoutItemsTotalPriceOfEachItem"



type Props = {
    data: TItemInCart[]
}

export default async function CheckoutMain(props: Props) {
    // const [cartItems, setCartItems] = useState<TItemInCart[]>(props.data)
    const IPData = await getCurrentAddress()

    const cartItems = props.data

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

    const generatePlaceOrderTokenItems = () => {
        const items = [] as TItemForPlaceOrderToken[]
        cartItems.forEach((item) => {
            items.push({
                id: item.details.id,
                price: item.details.price - (item.details?.hasDiscount?.state ? item.details.hasDiscount.value : 0),
                quantity: item.quantity
            })
        });
        return items;
    }

    return (
        <div className="w-[95%] mx-auto ">
            {cartItems.length === 0
                ? <NoCartItemFound />
                : <div className=" mx-auto my-8 p-6 flex flex-col lg:flex-row lg:justify-between gap-8 bg-white shadow-lg rounded-lg">
                    <div className="space-y-6 w-full ">
                        <div className="grid grid-cols-6">
                            <p className="text-xl font-bold col-span-3 ml-2">Info</p>
                            <p className="text-xl font-bold ">Price</p>
                            <p className="text-xl font-bold ">Qty</p>
                            <p className="text-xl font-bold ">Total</p>
                        </div>
                        <div className="w-full md:overflow-auto md:max-h-[70vh] space-y-3">
                            {cartItems && cartItems.map((c, i) => {
                                return (
                                    <div key={i} className="w-full grid grid-cols-6">
                                        <CheckoutDetails
                                            name={c.details.name}
                                            imageUrl={c.details.imageUrl}
                                            category={c.details.category}
                                        />
                                        <CheckoutItemPrice
                                            price={c.details.price}
                                            hasDiscount={c.details.hasDiscount}
                                        />
                                        <CheckoutItemCounts
                                            count={c.quantity}
                                        />
                                        <CheckoutItemsTotalPriceOfEachItem
                                            price={c.details.price}
                                            hasDiscount={c.details.hasDiscount}
                                            quantity={c.quantity}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="w-full space-y-5 lg:w-[35rem] rounded-lg">
                        <DisplayOrderSummary
                            itemsCount={calculateTotalQuantity()}
                            total={calculateTotal()}
                            additionalDiscount={0}
                            deliveryCharge={120}
                        />
                        <DisplayDeliveryInfo IPData={IPData} />
                        <CheckoutPlaceOrderButton
                            items={generatePlaceOrderTokenItems()}
                        />
                    </div>
                </div>}
        </div>
    )
}


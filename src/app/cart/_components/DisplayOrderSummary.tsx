
type Props = {
    itemsCount: number
    total: number
    deliveryCharge: number
    additionalDiscount: number
}

const DisplayOrderSummary = (props: Props) => {
    const { itemsCount, total, deliveryCharge, additionalDiscount } = props
    const totalCharge = Math.round(total) + Math.round(deliveryCharge) - Math.round(additionalDiscount)
    return (
        <div className="space-y-2 w-full bg-gray-50 p-4">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            <div className="flex justify-between">
                <span>Subtotal ({itemsCount} items)</span>
                <span>Rs. {Math.round(total)}</span>
            </div>
            <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>Rs. {Math.round(deliveryCharge)}</span>
            </div>
            <div className="flex justify-between">
                <span>Shipping Fee Discount</span>
                <span className="text-red-600">-Rs. {Math.round(additionalDiscount)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total</span>
                <span>Rs. {Math.round(totalCharge)}</span>
            </div>
        </div>
    )
}

export default DisplayOrderSummary
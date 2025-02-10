
type Props = {
    price: number
    quantity: number
    discount: {
        isActive: boolean
        value: number
    } | null
}

const CheckoutItemsTotalPriceOfEachItem = (props: Props) => {
    const { price, quantity, discount } = props
    const totalPrice = discount?.isActive
        ? Math.round(price) - Math.round(discount.value)
        : Math.round(price)
    return (
        <div><p>Rs  {totalPrice * quantity}</p></div>
    )
}

export default CheckoutItemsTotalPriceOfEachItem
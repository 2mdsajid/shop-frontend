import React from 'react'

type Props = {
    count: number
}

const CheckoutItemCounts = (props: Props) => {
    return (
        <p>{props.count}</p>
    )
}

export default CheckoutItemCounts
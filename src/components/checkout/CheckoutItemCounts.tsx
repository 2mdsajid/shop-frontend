import React from 'react'

type Props = {
    count: number
}

const CheckoutItemCounts = (props: Props) => {
    return (
        <div>count : {props.count}</div>
    )
}

export default CheckoutItemCounts
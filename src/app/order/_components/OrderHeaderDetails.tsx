import React from 'react'

type Props = {}

const OrderHeaderDetails = (props: Props) => {
    return (
        <div className='space-y-2'>
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Dear name, Your Purchase Received!</h1>
            {/* <p className="text-lg text-gray-700 mb-2">Hello Valued Customer,</p>
            <p className="text-gray-600 mb-4">
                We are thrilled to let you know that your order has been successfully placed. A confirmation email will be sent
                to you shortly. Below are the details of your transaction.
            </p> */}
        </div>
    )
}

export default OrderHeaderDetails
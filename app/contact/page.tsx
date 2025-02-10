import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="mb-4">
                We would love to hear from you! Whether you have a question about our products, need assistance, or just want to share your feedback, feel free to reach out to us.
            </p>
            <p className="mb-4">
                Address: 5657/20 Gali Hanuman Mandir Nabikarim Paharganj New Delhi 110055
            </p>
            <p className="mb-4">
                Phone: +91 9718923964
            </p>
            <p>
                Email: support@aaifa.in
            </p>
            <p>
                Alternatively, you can fill out our contact form, and we will get back to you as soon as possible.
            </p>
        </div>
    )
}

export default page
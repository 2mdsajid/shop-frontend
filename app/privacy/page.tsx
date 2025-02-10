import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">
                At NewPurse, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
            <p className="mb-4">
                We collect personal information when you register on our site, place an order, subscribe to our newsletter, or fill out a form. This may include your name, email address, mailing address, phone number, and payment information.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
            <p className="mb-4">
                The information we collect may be used to process transactions, send periodic emails, improve customer service, and personalize your experience.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Protection of Information</h2>
            <p className="mb-4">
                We implement a variety of security measures to maintain the safety of your personal information. Your information is stored in secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="mb-4">
                Our site may use cookies to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Disclosure</h2>
            <p className="mb-4">
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Changes to Our Privacy Policy</h2>
            <p className="mb-4">
                We may update our privacy policy from time to time. Any changes will be posted on this page.
            </p>
        </div>)
}

export default page
// OrderHeaderDetails Component
const OrderHeaderDetails = ({ orderedBy }: { orderedBy: { id: string; name: string; email: string } }) => {
    return (
      <div className="space-y-2 text-center">
        <h1 className="text-2xl text-brand-primary mb-4">Dear <span className="font-extrabold">{orderedBy.name}</span>, Your Purchase is Confirmed!</h1>
        <p className="text-neutral-text-secondary text-sm">
          We're thrilled to let you know that your order has been successfully placed. A confirmation email will be sent
          to you shortly.
        </p>
      </div>
    )
  }

  export default OrderHeaderDetails
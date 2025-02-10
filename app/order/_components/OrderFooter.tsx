import { Card, CardContent } from "@/components/ui/card";

// OrderFooter Component
const OrderFooter = ({ orderedBy }: { orderedBy: { id: string; name: string; email: string } }) => {
    return (
      <Card className="mt-6 bg-brand-light">
        <CardContent className="text-center p-4">
          <p className="text-neutral-text-secondary mb-2">
            Thank you for your purchase, {orderedBy.name}. We look forward to serving you again.
          </p>
          <p className="text-neutral-text-secondary">Best Wishes,</p>
          <p className="text-xl font-bold text-brand-primary mt-2">Aafinaya</p>
        </CardContent>
      </Card>
    )
  }

  export default OrderFooter
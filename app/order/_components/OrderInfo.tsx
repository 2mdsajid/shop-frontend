import { Card, CardContent } from "@/components/ui/card"

// OrderInfo Component
const OrderInfo = ({
    id,
    orderToken,
    createdAt,
    status,
}: { id: string; orderToken: string; createdAt: Date; status: string }) => {
    const formattedDate = new Date(createdAt).toLocaleString()
    return (
        <Card className="mb-4 bg-white shadow-sm">
            <CardContent className="flex flex-col sm:flex-row justify-between md:items-center p-4 gap-1">
                <div className="text-sm text-neutral-text-secondary">
                    Order ID: <span className="font-medium text-brand-secondary">{orderToken.replace(/-/g, "")}</span>
                </div>
                <div className="text-sm text-neutral-text-secondary">
                    Date: <span className="font-medium text-brand-secondary">{formattedDate}</span>
                </div>
                <div className="text-sm">
                    Status: <span className="font-medium text-brand-primary">{status}</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default OrderInfo
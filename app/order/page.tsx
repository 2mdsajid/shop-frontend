import { getUserSession } from "@/lib/actions/auth.actions"
import OrderMain from "./_components/OrderMain"
import ErrorPage from "@/components/reusable/ErrorPage"
import { confirmOrderTokenAndGetDetails } from "@/lib/actions/order.actions"

type Props = {
    searchParams: Promise<{
        t: string
    }>
}

const page = async (props: Props) => {
    const {data: userSession, message: sessionMessage} = await getUserSession()
    if (!userSession) {
        return <div className='min-h-[93vh] flex items-center justify-center max-w-xl mx-auto'>
            <ErrorPage message={sessionMessage} />
        </div>
    }

    const { t } = await props.searchParams

    const { data: orderDetails, message } = await confirmOrderTokenAndGetDetails(t)
    if (!orderDetails) return (
        <ErrorPage message={message} />
    )

    return (
        <div className='w-screen'>
            <OrderMain
            orderDetails={orderDetails}
            />
        </div>
    )
}

export default page
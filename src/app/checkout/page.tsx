import CheckoutMain from '@/components/checkout/CheckoutMain'
import NotFound from '@/components/reusable/NotFound'
import { getCheckoutItems } from '@/lib/actions'

type Props = {
    searchParams: {
        t: string
    }
}

const page = async (props: Props) => {
    const { t } = props.searchParams
    const { data, message } = await getCheckoutItems(t)
    return (
        <div className='w-screen'>
            {(data && data.length > 0) ? <CheckoutMain data={data} /> : <NotFound message={message} />}
        </div>
    )
}

export default page
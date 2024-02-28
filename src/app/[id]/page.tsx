import SingleProductDisplay from '@/components/id/SingleProductDisplay'
import NotFound from '@/components/reusable/NotFound'
import { getSingleBagData } from '@/lib/actions'
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

const page = async (props: Props) => {
    const { id } = props.params
    const { data, message } = await getSingleBagData(id)
    return (
        <div className='w-screen'>
            {data ? <SingleProductDisplay {...data} /> : <NotFound message={message} />}
        </div>
    )
}

export default page
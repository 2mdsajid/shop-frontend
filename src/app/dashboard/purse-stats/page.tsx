import PurseStateCards from '@/components/dashboard/purse-stats/PurseStateCards'
import { getAllProducts } from '@/lib/actions'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
    const { data, message } = await getAllProducts()

    if (!data) {
        return (
            <p>{message}</p>
        )
    }
    return (
        <div className='w-full p-4 pt-12'>
            <PurseStateCards data={data} />
        </div>
    )
}

export default page
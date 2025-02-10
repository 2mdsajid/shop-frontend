

import { getAllProducts } from '@/lib/actions/product.actions'
import React from 'react'
import ErrorPage from '@/components/reusable/ErrorPage'
import ProductStatsCards from './_components/ProductStatsCards'
type Props = {}

const page = async (props: Props) => {
    const { data, message } = await getAllProducts()

    if (!data) {
        return (
            <ErrorPage message={message} />
        )
    }
    console.log(data)
    return (
        <div className=''>
            <ProductStatsCards data={data} />
        </div>
    )
}

export default page
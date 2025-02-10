import React from 'react'
import { getProductById } from '@/lib/actions/product.actions'
import ErrorPage from '@/components/reusable/ErrorPage'
import SingleProductDisplay from './_components/SingleProductDisplay'

type Props = {
    params: Promise<{   
        id: string
    }>
}

const page = async (props: Props) => {
    const { id } = await props.params
    const { data, message } = await getProductById(id)
    if (!data) {
        return <ErrorPage message={message} />
    }
    return (
        <SingleProductDisplay {...data} />
    )
}

export default page
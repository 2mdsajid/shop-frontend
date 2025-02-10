import ErrorPage from '@/components/reusable/ErrorPage'
import { getProductById, getCategories } from '@/lib/actions/product.actions'
import React from 'react'
import EditProductForm from './_components/EditProductForm'

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

    const { data: categories, message: categoriesMessage } = await getCategories()
    if (!categories) {
        return <ErrorPage message={categoriesMessage} />
    }

    return (
        <div className='max-w-7xl mx-auto pb-0'>
            <h1 className="text-3xl font-serif text-brand-primary text-center mb-8">Edit Purse</h1>
            <EditProductForm product={data} categories={categories} />
        </div>
    )
}

export default page
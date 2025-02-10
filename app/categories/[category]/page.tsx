import React from 'react'
import ErrorPage from '@/components/reusable/ErrorPage'
import { ProductCard } from '@/components/reusable/ProductCard'
import { getProductsByCategory } from '@/lib/actions/product.actions'
type Props = {
    params: Promise<{
        category: string
    }>
}

const page = async (props: Props) => {
    const { category } = await props.params
    const { data, message } = await getProductsByCategory(category)
    if (!data) {
        return <ErrorPage message={message} />
    }
    
    return (
        <div className='py-10'>
            <h1 className="text-2xl font-bold text-center my-8 capitalize">{category.replace(/_/g, ' ').toUpperCase()}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
                {data?.map((product) => (
                    <ProductCard
                    key={product.id} 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.imageUrl}
                    discount={product.discount}
                    />
                ))}
            </div>
        </div>
    )
}

export default page
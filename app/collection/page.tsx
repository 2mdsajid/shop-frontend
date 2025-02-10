import ErrorPage from '@/components/reusable/ErrorPage'
import { ProductCard } from '@/components/reusable/ProductCard'
import { getAllProducts } from '@/lib/actions/product.actions'
import React from 'react'

const formatCategoryTitle = (category: string) => {
  return category.replace(/_/g, ' ').toUpperCase()
}

const Page = async () => {
  const { data: products, message } = await getAllProducts()

  if (!products || products.length === 0) {
    return <ErrorPage message="No products found" />
  }

  // Group products by category
  const productsByCategory = products.reduce((acc: Record<string, typeof products>, product) => {
    if (!acc[product.category]) acc[product.category] = []
    acc[product.category].push(product)
    return acc
  }, {})

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ">
      {Object.entries(productsByCategory).map(([category, products]) => (
        <div key={category} className='my-10'>
          <h2 className="text-3xl font-serif text-brand-primary text-center mb-8">{formatCategoryTitle(category)}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 items-center content-center">
            {products.map((product) => (
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
      ))}
    </div>
  )
}

export default Page

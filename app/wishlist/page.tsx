import { Button } from '@/components/ui/button'
import { getFavouriteProducts } from '@/lib/actions/product.actions'
import Link from 'next/link'
import WishListProductCard from '@/components/reusable/WishListProductCard'


type Props = {}

const page = async (props: Props) => {
  const { data: products, message } = await getFavouriteProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif text-brand-primary text-center mb-8">My Wishlist</h1>

      {products && products.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {products?.map((product) => (
              <WishListProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-secondary hover:bg-brand-dark text-brand-light">ADD ALL TO CART</Button>
            <Button disabled variant="outline" className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10">
              REMOVE ALL FROM WISHLIST
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 px-4">
          <p className="text-brand-secondary mb-6">You haven't added any products to your wishlist yet.</p>
          <Button asChild className="bg-brand-secondary hover:bg-brand-dark text-brand-light transition-colors">
            <Link href="/">START SHOPPING</Link>
          </Button>
        </div>
      )}

      
    </div>
  )
}

export default page
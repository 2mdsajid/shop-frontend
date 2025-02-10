import { getLatestProducts } from "@/lib/actions/product.actions"
import ErrorSection from "@/components/reusable/ErrorSection"
import { ProductCard } from "@/components/reusable/ProductCard"
import Link from "next/link"


export async function LatestProductSection() {
    const { data: products, message } = await getLatestProducts()
    if (!products || products.length === 0) {
        return <ErrorSection message={message} />
    }

    return (
        <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl text-center font-bold">Featured Products</h2>
            <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 items-center content-center">
                {products.slice(0, 6).map((product) => (
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
            <div className="mt-8 flex justify-center">
                <Link href="/collection" className="bg-teal-800 hover:bg-teal-700 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2">
                    VIEW ALL →
                </Link>
            </div>
        </section>
    )
}


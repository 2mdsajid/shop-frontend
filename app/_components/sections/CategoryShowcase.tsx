import { CategoryCard } from "@/components/reusable/CategoryCard"
import ErrorSection from "@/components/reusable/ErrorSection"
import { getCategories } from "@/lib/actions/product.actions"


export async function CategoryShowcase() {
  const {data:categories, message:categoryMessage} = await getCategories()
  if(!categories) return <ErrorSection message={categoryMessage} />

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">✨ VALENTINE'S PICK UNDER 2000 ✨</h2>
        <p className="mt-2 text-sm text-gray-600">Find Your Bag of Love</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.slice(0, 4).map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </div>
  )
}


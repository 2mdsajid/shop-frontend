import Image from "next/image"
import Link from "next/link"
import { TCategory } from "@/lib/schema/product.schema"


export function CategoryCard(props: TCategory) {
  return (
    <Link href={`/categories/${props.name}`} className="group relative block overflow-hidden rounded-2xl bg-pink-100">
      <div className="relative aspect-square">
        <Image
          src={props.imageUrl || "/placeholder.svg"}
          alt={props.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-pink-500 p-4">
        <h3 className="text-center text-xl font-bold text-white">{props.name.replace(/_/g, " ").toUpperCase()}</h3>
      </div>
    </Link>
  )
}


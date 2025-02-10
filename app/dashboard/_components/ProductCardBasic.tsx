import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import PurseStatsDeleteButton from './ProductDeleteButton';
import { TProductBase } from '@/lib/schema/product.schema';
type Props = {
  product: TProductBase
}

const ProductCardBasic = (props: Props) => {
  const {
    id,
    name,
    imageUrl,
    category,
    isNew,
    price,
    brand,
    isFreeDelivery,
    discount } = props.product


  return (
    <div className={`border p-4 shadow-md rounded-md relative`}>
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover mb-4" />
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm text-gray-600">{brand}</p>
      <p className="text-sm text-gray-600">{category}</p>
      <p className="text-gray-700 text-base">
        {discount && discount.isActive ? (
          <p className='flex gap-2 items-center font-semibold'>
            Rs {price - discount.value}
            <span className="line-through text-xs text-red-300">Rs {price}  </span>
          </p>
        ) : (
          <p className='text-start font-semibold' >Rs {price}</p>
        )}
      </p>
      {isNew && <span className="absolute left-0 top-0 border rounded-md bg-green-500 px-2 py-1 text-white">New</span>}
      <div>
        <Button asChild><Link href={`/dashboard/${id}`}>Edit</Link></Button>
        <PurseStatsDeleteButton id={id} />
      </div>
    </div>)
}

export default ProductCardBasic
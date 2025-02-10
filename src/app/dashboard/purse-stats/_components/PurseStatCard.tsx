import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import PurseStatsDeleteButton from './PurseStatsDeleteButton';

type Props = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  isFreeDelivery?: boolean;
  itemsLeft?: number;
  brand?: string;
  images?: string[];
  isNew?: boolean;
  hasDiscount?: {
    state: boolean;
    value: number | 0;
  }
}

const PurseStatCard = (props: Props) => {
  const { id, name, imageUrl, category, isNew, price, hasDiscount } = props
  return (
    <div className={`border p-4 shadow-md rounded-md relative`}>
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover mb-4" />
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm text-gray-600">{category}</p>
      <p className="text-gray-700 text-base">
        {hasDiscount && hasDiscount.state ? (
          <p className='flex gap-2 items-center font-semibold'>
            Rs {price - hasDiscount.value}
            <span className="line-through text-xs text-red-300">Rs {price}  </span>
          </p>
        ) : (
          <p className='text-start font-semibold' >Rs {price}</p>
        )}
      </p>
      {isNew && <span className="absolute left-0 top-0 border rounded-md bg-green-500 px-2 py-1 text-white">New</span>}
      <div>
        <Button asChild><Link href={`/dashboard/purse-stats/${id}`}>Edit</Link></Button>
        <PurseStatsDeleteButton id={id} />
      </div>
    </div>)
}

export default PurseStatCard
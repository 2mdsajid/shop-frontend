'use client'

import { TBasicBagInfo } from '@/lib/global-types';
import Link from 'next/link';
import { TiShoppingCart } from "react-icons/ti";
import { Button } from '../ui/button';
import { addToCart } from '@/lib/actions';


const BasicBagInfoCard = (props: TBasicBagInfo) => {
    const { id, name, price, image, hasDiscount, isNew } = props;

    return (
        <Button
            className='relative w-full h-max p-0'
            variant={'outline'} >
            <Link href={`/${id}`} className='w-full p-2'>
                <div className='w-full flex flex-col items-start gap-3'>
                    {isNew && isNew && (
                        <div className="absolute top-0 right-0 px-2 py-1  text-xs border bg-red-600 text-white">
                            <span>new</span>
                        </div>
                    )}
                    <img className="w-full" src={image} alt={name} />
                    <div className="text-wrap">
                        <div className="font-bold text-lg mb-2 text-wrap">{name}</div>
                        <p className="text-gray-700 text-base">
                            {hasDiscount && hasDiscount.state ? (
                                <p className='flex gap-2 items-center'>
                                    Rs {price - hasDiscount.value}
                                    <span className="line-through text-xs text-red-300">Rs {price}  </span>
                                </p>
                            ) : (
                                <p className='text-start' >Rs {price}</p>
                            )}
                        </p>
                        <div className='flex flex-wrap gap-2 my-2'>
                            <Button onClick={(e) => {
                                e.preventDefault();
                                addToCart(id);
                            }}>
                                <TiShoppingCart />
                            </Button>
                            <Button asChild><Link href={`/${id}-1`}>view</Link></Button>
                        </div>
                    </div>
                </div>
            </Link>
        </Button>
    )
}

export default BasicBagInfoCard


/* 

                {hasDiscount && hasDiscount.state && (
                    <div className="absolute -top-5 -right-2 rounded-full p-3 flex flex-col gap-1 text-xs border bg-red-200">
                        <span className="">{hasDiscount.value}%</span>
                    </div>
                )}
                <img className="w-full" src={image} alt={name} />
                <div className="">
                    <div className="font-bold text-lg mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        Rs {price}
                    </p>
                    <div className='flex flex-wrap gap-2 my-2'>
                        <Button>Add To Cart</Button>
                        <Button>View</Button>
                    </div>
                </div>

*/
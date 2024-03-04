'use client'

import { toast } from '@/components/ui/use-toast';
import { addToCart } from '@/lib/actions';
import { TBasicBagInfo } from '@/lib/global-types';
import Link from 'next/link';
import { AiOutlineFire } from "react-icons/ai";
import { IoIosExpand } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import BuyNowButton from './BuyNowButton';
import ReusableImage from './ReusableImage';

const BasicBagInfoCard = (props: TBasicBagInfo) => {
    const { id, name, price, imageUrl, hasDiscount, isNew } = props;

    return (

        <Link href={`/${id}`} className='w-full relative h-max p-1 shadow-md rounded-md hover:scale-105 transform transition-transform duration-300'>
            <div className='w-full flex flex-col items-start gap-1'>
                {isNew && isNew && (
                    <div className="absolute top-1 left-1 p-1 rounded text-xs border bg-green-600 text-white">
                        <span className='flex items-center gap-1'><AiOutlineFire /> HOT</span>
                    </div>
                )}
                <ReusableImage className="w-full rounded-md " src={imageUrl} alt={name} />
                <div className="w-full text-wrap p-2">
                    <div className="font-bold text-lg text-wrap">{name}</div>
                    <p className="text-gray-700 text-base">
                        {hasDiscount && hasDiscount.state ? (
                            <p className='flex gap-2 items-center'>
                                Rs {Math.round(price - hasDiscount.value)}
                                <span className="line-through text-xs text-red-300">Rs {Math.round(price)}  </span>
                            </p>
                        ) : (
                            <p className='text-start' >Rs {Math.round(price)}</p>
                        )}
                    </p>
                    <div className='flex justify-between items-center gap-2  w-full'>
                        <div className='flex flex-wrap gap-1 my-1'>
                            <div className="p-2 rounded-full shadow-md hover:scale-110 transform transition-transform duration-100 ">
                                <IoCartOutline
                                    size={20}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const { state, message } = addToCart(id, 1);
                                        return toast({
                                            title: state,
                                            variant: state,
                                            description: message,
                                            duration: 2500,
                                        })
                                    }}
                                />
                            </div>
                            <Link
                                className='p-2 rounded-full shadow-md hover:scale-110 transform transition-transform duration-100 '
                                href={`/${id}`}>
                                <IoIosExpand
                                    size={20}
                                />
                            </Link>
                        </div>
                        <div className=''>
                            <BuyNowButton productId={id} />
                        </div>
                        {/* <IoMdHeartEmpty
                            size={25}
                            className='hover:scale-110 transform transition-transform duration-100 '
                        /> */}
                    </div>
                </div>
            </div>
        </Link>

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
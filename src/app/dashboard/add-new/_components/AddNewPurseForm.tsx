'use client'

import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { FormEvent, useEffect, useState } from 'react';
import ImageUploaderComponent from './ImageUploaderComponent';
import { Textarea } from '@/components/ui/textarea';
import { TBasicBagInfoForEdit } from '@/lib/global-types';
import { isValidUUID } from '@/lib/utils';

type Props = {
  data?: TBasicBagInfoForEdit
}

const AddNewPurseForm = (props: Props) => {

  const [productId, setProductId] = useState('')
  const [isNew, setIsNew] = useState(true)
  const [images, setImages] = useState<string[]>([''])
  const [imageUrl, setImageUrl] = useState('someurl')
  const [hasDiscount, setHasDiscount] = useState(false)
  const [discount, setDiscount] = useState(0)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [isFreeDelivery, setIsFreeDelivery] = useState(false);
  const [itemsLeft, setItemsLeft] = useState(0);
  const [brand, setBrand] = useState('');

  const SetImages = (images: string[]) => {
    return setImages(images)
  }


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const productObject = {
        userId: '8eafa76a-939f-4072-aa51-cbb3bab01935',
        isNew,
        images,
        imageUrl: images[0],
        hasDiscount: {
          state: hasDiscount,
          value: discount,
        },
        name,
        description,
        price,
        category,
        isFreeDelivery,
        itemsLeft,
        brand,
      };

      if (images.length == 0) {
        return toast({
          variant: "destructive",
          title: "warning",
          description: "please at least one image.",
        })
      }

      const isValid = Object.values(productObject).every((value) => value !== null && value !== undefined);

      if (!isValid) {
        return toast({
          variant: "destructive",
          title: "warning",
          description: "please fill all required fields.",
        })
      }


      const apiEndPoint = (productId && isValidUUID(productId)) ? `/update/${productId}` : `/add`
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product${apiEndPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productObject),
      })
      const { state, message } = await response.json()
      return toast({
        variant: state,
        title: state,
        description: message,
      })

    } catch (error) {
      return toast({
        variant: "destructive",
        title: "warning",
        description: "something went wrong.",
      })
    }
  };

  useEffect(() => {
    if (props?.data) {
      let {
        id,
        name,
        price,
        category,
        itemsLeft,
        brand,
        isFreeDelivery,
        description,
        imageUrl,
        images,
        hasDiscount
      } = props?.data
      console.log("🚀 ~ useEffect ~ props?.data:", props?.data)

      if (!hasDiscount) {
        hasDiscount = {
          state: false,
          value: 0
        }
      }

      setProductId(id)
      setName(name)
      setBrand(brand)
      setPrice(price)
      setCategory(category)
      setItemsLeft(itemsLeft)
      setIsFreeDelivery(isFreeDelivery)
      setHasDiscount(hasDiscount.state || false)
      setDiscount(hasDiscount.value || 0)
      setDescription(description)
      setImageUrl(imageUrl)
      setImages(images)
      setIsNew(isNew)
    }

  }, [])

  return (
    <div>
      <div className='w-full mx-auto p-8 pb-0'>
        <ImageUploaderComponent
          SetImages={SetImages}
        />
        {images.length > 0 &&
          <div className="mb-4 flex gap-3">
            {images.map((u, i) => {
              return <img className='w-16 h-16' src={u} key={i} alt='image' />
            })}
          </div>}
      </div>
      <form onSubmit={handleSubmit} className="w-full mx-auto p-8">
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <Input type="text" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} className="form-input mt-1 w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <Textarea name="description" value={description} onChange={(e) => setDescription(e.currentTarget.value)} className="form-textarea mt-1 w-full"></Textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <Input type="number" name="price" value={price} onChange={(e) => setPrice(parseInt(e.currentTarget.value))} className="form-input mt-1 w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category:</label>
          <Input type="text" name="category" value={category} onChange={(e) => setCategory(e.currentTarget.value)} className="form-input mt-1 w-full" />
        </div>

        <div className="flex gap-2 mb-4">
          <label className="block text-gray-700">Free Delivery:</label>
          <input type="checkbox" name="isFreeDelivery" checked={isFreeDelivery} onChange={(e) => setIsFreeDelivery(!isFreeDelivery)} className="form-checkbox mt-1" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Items Left:</label>
          <Input type="number" name="itemsLeft" value={itemsLeft} onChange={(e) => setItemsLeft(parseInt(e.currentTarget.value))} className="form-input mt-1 w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Brand:</label>
          <Input type="text" name="brand" value={brand} onChange={(e) => setBrand(e.currentTarget.value)} className="form-input mt-1 w-full" />
        </div>

        <div className="flex gap-2 mb-4">
          <label className="block text-gray-700">New Arrival:</label>
          <input type="checkbox" name="isNew" checked={isNew} onChange={() => setIsNew(!isNew)} className="form-checkbox mt-1" />
        </div>

        <div className="flex gap-2 mb-4">
          <label className="block text-gray-700">Discount Available:</label>
          <input type="checkbox" name="hasDiscount" checked={hasDiscount} onChange={() => setHasDiscount(!hasDiscount)} className="form-checkbox mt-1" />
        </div>
        {hasDiscount && (
          <div className="mb-4">
            <label className="block text-gray-700">Discount Value:</label>
            <Input
              type="number"
              name="discount"
              value={discount}
              onChange={(e) => setDiscount(parseInt(e.currentTarget.value))}
              className="form-input mt-1 w-full"
            />
          </div>
        )}

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
      </form>

    </div>
  );
};

export default AddNewPurseForm;

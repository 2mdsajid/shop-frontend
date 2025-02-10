'use client'

import Image from "next/image"
import { useState } from "react"

type Props = {
    images: string[]
    imageUrl: string
    name: string
}

const ProductImages = (props: Props) => {
    const { images, imageUrl, name } = props
    const [selectedImage, setSelectedImage] = useState(imageUrl)
    
    return (
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
          {images.map((image) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border hover:border-gray-300 ${
                imageUrl === image ? 'border-gray-900' : 'border-gray-200'
              }`}
            >
              <Image src={image} alt={image} fill className="object-cover" />
            </button>
          ))}
        </div>
        <div className="relative flex-1 aspect-square">
          <Image
            src={selectedImage || imageUrl}
            alt={name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    )
  }

export default ProductImages
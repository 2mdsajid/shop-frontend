'use client'

import { Heart } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { addToFavourite } from '@/lib/actions/product.actions'
import { toast } from '@/hooks/use-toast'

type Props = {
    productId: string
}

const AddToFavouriteButton = (props: Props) => {
    const handleAddToFavourite = async (e: any) => {
        e.preventDefault()
        const { data, message } = await addToFavourite(props.productId)
        if (data) {
            return toast({
                variant: "success",
                title: "success",
                description: message,
            })
        } else {
            return toast({
                variant: "destructive",
                title: "warning",
                description: message,
            })
        }
    }
    return (
        <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 rounded-full bg-white/80 backdrop-blur-sm"
            onClick={handleAddToFavourite}
        >
            <Heart className="h-5 w-5" />
        </Button>
    )
}

export default AddToFavouriteButton
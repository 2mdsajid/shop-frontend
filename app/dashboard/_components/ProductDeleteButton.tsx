'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, dialogCloseFun } from '@/components/ui/dialog'
import { toast } from '@/hooks/use-toast'
import { deleteProductById } from '@/lib/actions/product.actions'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
type Props = {
    id: string
}

const ProductDeleteButton = (props: Props) => {
    const { id } = props
    const router = useRouter()

    const [isButtonCLicked, setIsButtonClicked] = useState(false)

    const deletePurseOnclick = async () => {
        setIsButtonClicked(true)
        const { data, message } = await deleteProductById(id)
        if (!data) {
            setIsButtonClicked(false)
            return toast({
                title: 'Error',
                variant: 'destructive',
                description: message
            })
        }
        setIsButtonClicked(false)
        dialogCloseFun()
        router.refresh()
        return toast({
            title: 'Success',
            variant: 'success',
            description: 'Product deleted successfully'
        })
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button className='bg-red-500'>Delete</Button>
            </DialogTrigger>
            <DialogContent className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                    Are you sure you want to delete this product? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-2">
                    <Button variant="destructive" onClick={deletePurseOnclick}>
                        {isButtonCLicked ? 'Deleting...' : 'Delete'}
                    </Button>
                    <Button onClick={() => dialogCloseFun()}>Cancel</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProductDeleteButton
'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, dialogCloseFun } from '@/components/ui/dialog'
import { toast } from '@/components/ui/use-toast'
import { deletePurse } from '@/lib/actions'
import React, { useState } from 'react'

type Props = {
    id: string
}

const PurseStatsDeleteButton = (props: Props) => {
    const { id } = props

    const [isButtonCLicked, setIsButtonClicked] = useState(false)

    const deletePurseOnclick = async () => {
        setIsButtonClicked(true)
        const { state, message } = await deletePurse(id)
        setIsButtonClicked(false)
        toast({
            title: state,
            variant: state,
            description: message
        })
        if (state === 'success') dialogCloseFun()
        return
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button className='bg-red-500'>Delete</Button>
            </DialogTrigger>
            <DialogContent>
                <Button
                    className='bg-red-500'
                    onClick={deletePurseOnclick}>
                    {isButtonCLicked
                        ? 'Deleting'
                        : 'Are You Sure Want To Delete ?'}
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default PurseStatsDeleteButton
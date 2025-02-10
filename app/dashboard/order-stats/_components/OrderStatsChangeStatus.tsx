'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogClose, dialogCloseFun } from '@/components/ui/dialog'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from '@/hooks/use-toast'
import { updateOrderStatus } from '@/lib/actions/order.actions'
import { TOrderStatus } from '@/lib/schema/order.schema'
import { orderStatusArray } from '@/lib/data'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


type Props = {
    orderId: string
    status: TOrderStatus
}


const OrderStatsChangeStatus = (props: Props) => {
    const router = useRouter()
    const { orderId, status } = props
    const [value, setValue] = useState<TOrderStatus>(status)
    const [isButtonCLicked, setIsButtonCLicked] = useState(false)

    const update = async () => {
        setIsButtonCLicked(true)
        const { data, message } = await updateOrderStatus(value, orderId)
        if (data === true) {
            router.refresh()
            dialogCloseFun()
            return toast({
                title: 'Status Updated Successfully!',
                variant: 'success',
                description: 'The status of the order has been updated successfully.'
            })
        }
        setIsButtonCLicked(false)
        return toast({
            title: 'Error Updating Status!',
            variant: 'destructive',
            description: message
        })
    }
    return (
        <Dialog>
            <DialogTrigger><p className='text-blue-600 underline text-xs cursor-pointer'>Change</p></DialogTrigger>
            <DialogContent>
                <Select onValueChange={(value: TOrderStatus) => setValue(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={value || "Status"} />
                    </SelectTrigger>
                    <SelectContent>
                        {orderStatusArray.map((status: TOrderStatus) => {
                            return (
                                <SelectItem key={status} value={status}>{status}</SelectItem>
                            );
                        })}
                    </SelectContent>
                </Select>
                <Button onClick={update}>{isButtonCLicked ? 'Updating' : 'Update'}</Button>
            </DialogContent>
        </Dialog>
    )
}

export default OrderStatsChangeStatus
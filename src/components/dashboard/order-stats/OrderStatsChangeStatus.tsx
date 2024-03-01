'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, dialogCloseFun } from '@/components/ui/dialog'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from '@/components/ui/use-toast'
import { updateOrderStatus } from '@/lib/actions'
import { TOrderStatus } from '@/lib/global-types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


type Props = {
    orderId: string
    status: TOrderStatus
}

const orderStatus: TOrderStatus[] = ['created', 'delivered', 'shipping']

const OrderStatsChangeStatus = (props: Props) => {
    const router = useRouter()
    const { orderId, status } = props
    const [value, setValue] = useState<TOrderStatus>(status)
    const [isButtonCLicked, setIsButtonCLicked] = useState(false)

    const update = async () => {
        setIsButtonCLicked(true)
        const { state, message } = await updateOrderStatus(value, orderId)
        if (state === 'success') {
            router.refresh()
            dialogCloseFun()
        }
        setIsButtonCLicked(false)
        return toast({
            title: state,
            variant: state,
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
                        {orderStatus.map((status) => {
                            return (
                                <SelectItem value={status}>{status}</SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
                <Button onClick={update}>{isButtonCLicked ? 'Updating' : 'Update'}</Button>
            </DialogContent>
        </Dialog>
    )
}

export default OrderStatsChangeStatus
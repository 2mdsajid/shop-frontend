import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import LoginComponent from '../reusable/LoginComponent'

type Props = {
    buttonLabel?: string
    props?: {
        searchParams: {
            t: string
        }
    }
}

const CartLoginDialog = (props: Props) => {
    return (
        <Dialog >
            <DialogTrigger className='w-full'>
                <Button className="w-full mt-4 bg-orange-500 text-white">{props.buttonLabel ? props.buttonLabel : 'PROCEED TO CHECKOUT'}</Button>
            </DialogTrigger>
            <DialogContent>
                <LoginComponent searchParams={props.props?.searchParams} />
            </DialogContent>
        </Dialog>
    )
}

export default CartLoginDialog
'use client'

import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { Button } from '../ui/button';

type Props = {
    id: string
    deleteFunction: (id: string) => void
}

const CartDeleteItem = (props: Props) => {
    const { id, deleteFunction } = props
    return (
        <Button className='w-max border' variant={'secondary'} onClick={() => deleteFunction(id)}><MdOutlineDelete /></Button>)
}

export default CartDeleteItem
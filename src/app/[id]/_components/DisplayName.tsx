import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

const DisplayName = (props: Props) => {
    return (
        <h1
            className={cn('text-2xl font-bold', props.className)}
        >{props.children}</h1>
    )
}

export default DisplayName
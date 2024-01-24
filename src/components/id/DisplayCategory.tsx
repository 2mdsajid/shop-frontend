import Link from 'next/link'
import React from 'react'

type Props = {
    brand?: string
    category: string
}

const DisplayCategory = (props: Props) => {
    const { category } = props
    return (
        <div className="flex items-center space-x-2">
            <span className="text-sm">Brand:</span>
            <Link className="text-sm text-blue-600" href="#">
                {category}
            </Link>
            <span>|</span>
            <Link className="text-sm text-blue-600" href={`/${category}`}>
                More from {category}
            </Link>
        </div>
    )
}

export default DisplayCategory
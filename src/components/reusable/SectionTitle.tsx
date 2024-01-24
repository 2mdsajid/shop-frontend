import React from 'react'

type Props = {
    title: string
    description?: string
}

const SectionTitle = (props: Props) => {
    const { title, description } = props
    return (
        <div className="my-5 mt-10 space-y-1">
            <h1 className="text-2xl font-bold tracking-tighter xl:text-3xl/none">
                {title}
            </h1>
            {description && <p className="max-w-[600px] text-gray-500 text-sm md:text-xl dark:text-gray-400">
                {description}
            </p>}
        </div>)
}

export default SectionTitle
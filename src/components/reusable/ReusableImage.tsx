import React from 'react'

type Props = {
    src: string
    className?: string
    alt?: string
}

const ReusableImage = (props: Props) => {
    const { src, className, alt } = props
    return (
        <img
            src={src}
            className={className}
            alt={alt || 'An Image Component'}
            loading='lazy'
            style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
            }}
        />
    )
}

export default ReusableImage
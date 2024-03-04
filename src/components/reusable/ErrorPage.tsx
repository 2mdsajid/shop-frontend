import React from 'react'

type Props = {
    message?: string
}

const ErrorPage = (props: Props) => {
    const message = props.message
    if (message) {
        return <p>{message}</p>
    }
    
    return (
        <div>Some Error Occured</div>
    )
}

export default ErrorPage
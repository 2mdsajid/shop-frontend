import React from 'react'

type Props = {
  message?: string
}

const NotFound = (props: Props) => {
  return (
    <div>{props.message ? <p>{props.message}</p> : <p>NotFound</p>}</div>
  )
}

export default NotFound
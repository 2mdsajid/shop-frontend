import SignIn from '@/components/auth/SignIn'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-screen'>
            <SignIn />
        </div>
    )
}

export default page
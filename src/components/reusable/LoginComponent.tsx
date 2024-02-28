'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'


const LoginComponent = () => {
    const pathname = usePathname()    
    const [isloginclicked, setIsLoginclicked] = useState(false)

    const handleGoogleLogin = async () => {
        setIsLoginclicked(true)
        await signIn('google', { callbackUrl: pathname || '/' })
    };

    return (
        <Button className="w-full flex gap-3 mt-5 items-center justify-center" onClick={handleGoogleLogin}>
            <span><FcGoogle /> </span>
            <span>{isloginclicked ? `Logging You In..` : `Continue With Google`}</span>
        </Button>
    )
}

export default LoginComponent

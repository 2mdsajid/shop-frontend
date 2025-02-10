'use server'

import { cookies } from "next/headers"
import { TCheckoutItemInput, TCheckoutItemWithProductBase } from "../schema/checkout.schema"


// check if user logged in or not
export const checkUserLoggedIn = async (): Promise<{
    data: boolean,
    message: string
}> => {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth-token")?.value;
    if (!authToken || authToken === undefined || authToken === null) {
        return { data: false, message: "User not logged in!" };
    }
    return { data: true, message: "User logged in!" };
}

// get checkout =-token from backend
export const getCheckoutToken = async (items: TCheckoutItemInput[]): Promise<{
    data: string | null,
    message: string
}> => {
    try {

        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken || authToken === undefined || authToken === null) {
          return { data: null, message: "User not logged in!" };
        } 

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/checkout/generate-checkout-token`, {
            method: 'POST',
            cache: 'no-store',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })

        if (!response.ok) {
            const errorData = await response.json()
            return { data: null, message: errorData.message }
        }

        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        return { data: null, message: error.message }
    }
}

// get checkout items details
export const getCheckoutItems = async (token: string): Promise<{
    data: TCheckoutItemWithProductBase[] | null,
    message?: string
}> => {
    try {

        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken || authToken === undefined || authToken === null) {
          return { data: null, message: "User not logged in!" };
        }    

        if (!token) {
            return { data: null, message: 'Token is required' }
        }

        const response = await fetch(`${process.env.BACKEND}/checkout/get-checkout-token-items-details/${token}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json'
            },
        })

        if (!response.ok) { 
            const errorData = await response.json()
            return { data: null, message: errorData.message }
        }

        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        return { data: null, message: 'Error Fetching The Data!' }
    }
};

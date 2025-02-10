"use server"

import { TBaseShippingAddress, TShippingAddress, TCreateShippingAddress } from "../schema/shipping.schema";
import { cookies } from "next/headers";

// get shipping address
export const getShippingAddress = async (): Promise<{
    data: TBaseShippingAddress[] | null,
    message?: string
}> => {

    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth-token")?.value;
    if (!authToken || authToken === undefined || authToken === null) {
      return { data: null, message: "User not logged in!" };
    }    

    try {
        const response = await fetch(`${process.env.BACKEND}/shipping/get-shipping-address`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
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
}


// create shipping address
export const createShippingAddress = async (shippingAddress: TCreateShippingAddress): Promise<{
    data: TShippingAddress | null,
    message?: string
}> => {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken || authToken === undefined || authToken === null) {
            return { data: null, message: "User not logged in!" };
        }

        const response = await fetch(`${process.env.BACKEND}/shipping/create-shipping-address`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(shippingAddress)
        })

        if (!response.ok) {
            const errorData = await response.json()
            console.log(errorData)
            return { data: null, message: errorData.message }
        }

        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        return { data: null, message: 'Error Creating The Data!' }
    }
}
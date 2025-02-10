'use server'

import { cookies } from "next/headers"
import { TCreateOrder, TOrderBase, TOrderDetail, TOrderStatus } from "../schema/order.schema"

// get place-order-token from backend
export const createOrder = async (createOrderData: TCreateOrder): Promise<{
    data: string | null,
    message: string
}> => {
    try {

        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken || authToken === undefined || authToken === null) {
          return { data: null, message: "User not logged in!" };
        }    

        // console.log(createOrderData)


        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/order/create-order`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(createOrderData)
        })
        if (!response.ok) {
            const { data, message } = await response.json()
            return { data:null, message }
        }
        
        const { data, message } = await response.json()
        console.log('saaaaaaaaaaaaaaaaaaaaaaaaa',message)
        return { data, message }
    } catch (error: any) {
        return { data: null, message: error.message }
    }
}



// get items details for checkout page
export const confirmOrderTokenAndGetDetails = async (token: string): Promise<{
    data: TOrderDetail | null,
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

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/order/confirm-order-token-and-get-details/${token}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
        })
        if (!response.ok) {
            const { data, message } = await response.json()
            return { data:null, message }
        }
        
        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        return { data: null, message: 'Error Fetching The Data!' }
    }
};


// get all orders
export const getAllOrders = async (): Promise<{
    data: TOrderBase[] | null,
    message: string
}> => {
    try {

        const cookieStore = await cookies();    
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken || authToken === undefined || authToken === null) {
          return { data: null, message: "User not logged in!" };
        }    

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/order/get-all-orders`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
        })

        if (!response.ok) {
            const { data, message } = await response.json()
            return { data: null, message }
        }

        const { data, message } = await response.json()
        return { data, message }

    } catch (error: any) {
        return { data: null, message: error.message }
    }
}


// update order status
export const updateOrderStatus = async (status: TOrderStatus, orderId: string): Promise<{
    data: boolean | null,
    message: string
}> => {
    try {

        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken || authToken === undefined || authToken === null) {
          return { data: null, message: "User not logged in!" };
        }
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/order/update-order-status/${orderId}`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({ status })
        })

        if (!response.ok) {
            const { data, message } = await response.json()
            return { data: null, message }
        }

        const { data, message } = await response.json()
        return { data, message }

    } catch (error: any) {
        return { data: null, message: error.message }
    }
}


// get order by id
export const getOrderDetailById = async (orderId: string): Promise<{
    data: TOrderDetail | null,
    message: string
}> => {
    try {

        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken || authToken === undefined || authToken === null) {
          return { data: null, message: "User not logged in!" };
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/order/get-order-by-id/${orderId}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
        })

        if (!response.ok) {
            const { data, message } = await response.json()
            return { data: null, message }
        }

        const { data, message } = await response.json()
        return { data, message }
        
    } catch (error: any) {
        return { data: null, message: error.message }
    }
}



// get orders by user id
export const getOrdersByUserId = async (userId: string): Promise<{
    data: TOrderBase[] | null,  
    message: string
}> => {
    try {

        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken || authToken === undefined || authToken === null) {
          return { data: null, message: "User not logged in!" };
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/order/get-orders-by-user-id/${userId}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
        })
        
        if (!response.ok) {
            const { data, message } = await response.json()
            return { data: null, message }
        }

        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        return { data: null, message: error.message }
    }
}
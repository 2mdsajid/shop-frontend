import { toast } from "@/components/ui/use-toast";
import { DUMMY_BAGS_DATA } from "./data"
import { TBasicBagInfo, TBasicBagInfoForEdit, TItemConfirmedOrder, TItemForCheckout, TItemForPlaceOrderToken, TItemInCart, TItemInCartLocalStorage, TLocationFromIpApi, TOrderInfo, TOrderProduct } from "./global-types";

// add item to cart
export const addToCart = (id: string, quantity: number): {
    state: 'success' | 'destructive',
    message: string
} => {
    try {
        const existingCart = localStorage.getItem('cart') || '[]';
        const parsedCart = JSON.parse(existingCart) as TItemInCartLocalStorage[];
        const existingItem = parsedCart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity = quantity;
        } else {
            parsedCart.push({ id, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(parsedCart));
        return { state: 'success', message: 'Successfully added to cart' };
    } catch (error) {
        console.error('Error adding to cart:', error);
        return { state: 'destructive', message: 'Unable to add to cart. Please try again later.' };
    }
};


export const getCartItems = async (): Promise<TItemInCart[] | []> => {
    const cartDataString = localStorage.getItem('cart') as string;

    if (!cartDataString || cartDataString === 'undefined') {
        return [];
    }

    const cartItemsLocalStorage: TItemInCartLocalStorage[] = JSON.parse(cartDataString);
    const cartItemsDetails: TItemInCart[] = [];

    for (const item of cartItemsLocalStorage) {
        try {
            const { data, message } = await getSingleBagData(item.id);
            if (data) {
                cartItemsDetails.push({
                    details: data,
                    quantity: item.quantity,
                });
            }
        } catch (error) {
            console.error(`Error fetching details for item with ID ${item.id}:`, error);
            return []
        }
    }

    return cartItemsDetails;
};


// get singel cart item from local storage
export const getSingleCartItem = (id: string) => {
    const cartDataString = localStorage.getItem('cart');
    if (!cartDataString) return 0;
    const cartData: Record<string, number> = JSON.parse(cartDataString);
    return cartData[id] || 0;
};


// remove from cart of localstorage
export const removeFromCart = (id: string): {
    state: 'success' | 'destructive',
    message: string
} => {
    try {
        const cartDataString = localStorage.getItem('cart');
        if (!cartDataString) {
            return { state: 'destructive', message: 'Items Not Found!' }
        }
        const cartData: TItemInCartLocalStorage[] = JSON.parse(cartDataString);
        const updatedCartData = cartData.filter((data) => data.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCartData));
        return { state: 'success', message: 'Removed successfully!' }
    } catch (error) {
        return { state: 'destructive', message: 'Some error occured!' }
    }
};


// get checkout =-token from backend
export const getCheckoutToken = async (items: TItemForCheckout[]): Promise<{
    data: string | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/generate-checkout-token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        return { data: null, message: error.message }
    }
}

// get place-order-token from backend
export const getPlaceOrderToken = async (items: TItemForPlaceOrderToken[]): Promise<{
    data: string | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/generate-place-order-token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        return { data: null, message: error.message }
    }
}

// get items details for checkout page
export const getCheckoutItems = async (token: string): Promise<{
    data: TItemInCart[] | null,
    message?: string
}> => {
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-checkout-token-items`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ token })
        })
        const data = await response.json()
        return data
    } catch (error: any) {
        return { data: null, message: 'Error Fetching The Data!' }
    }
};


// get items details for checkout page
export const confirmAndGetPlaceOrderItems = async (token: string, userId: string): Promise<{
    data: {
        products: TOrderProduct[],
        orderInfo: TOrderInfo
    } | null,
    message?: string
}> => {
    try {
        const response = await fetch(`${process.env.BACKEND}/product/confirm-and-get-place-order-items`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ token, userId })
        })
        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        return { data: null, message: 'Error Fetching The Data!' }
    }
};

// Get all the products
export const getAllProducts = async (): Promise<{
    data: TBasicBagInfo[] | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-all`, {
            cache: 'no-store'
        })
        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        return { data: null, message: 'Error Fetching The Data!' }
    }
}

// single bag data from BE
export const getSingleBagData = async (id: string): Promise<{
    data: TBasicBagInfoForEdit | null,
    message?: string
}> => {
    try {
        // return DUMMY_BAGS_DATA.find(b => b.id === id)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/get/${id}`, {
            method: 'GET',
            cache: 'no-store'
        })
        return await response.json()
    } catch (error: any) {
        return { data: null, message: 'Some Error Occured!' }
    }
}

// delete a purse/bag from BE
export const deletePurse = async (id: string): Promise<{
    state: 'success' | 'destructive',
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/delete/${id}`, {
            method: 'GET',
            cache: 'no-store'
        })
        const { state, message } = await response.json();
        return { state, message }
    } catch (error) {
        return { state: 'destructive', message: 'Some Error Occured!' }
    }
}

// get current address from the iP
export const getCurrentAddress = async (): Promise<TLocationFromIpApi | null> => {
    try {
        const ip = '103.146.218.156'
        const response = await fetch(
            `https://ipinfo.io/${ip}/json?token=80ea4f6c43a232`
        );

        if (!response.ok) return null;
        const ipInfoResponse = await response.json();
        return ipInfoResponse
    } catch (error) {
        return null
    }
}
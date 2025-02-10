import { TItemInCart, TItemInCartLocalStorage } from "../schema/cart.schema"
import { getProductBaseById } from "./product.actions"

// add item to cart
export const addToCart = (id: string, quantity: number): {
    success: boolean,
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
            return { success: true, message: `Successfully added ${quantity} items to cart` };
    } catch (error) {
        console.error('Error adding to cart:', error);
        return { success: false, message: 'Unable to add to cart. Please try again later.' };
    }
};

// from local storage
export const getCartItems = async (): Promise<TItemInCart[] | []> => {
    const cartDataString = localStorage.getItem('cart') as string;

    if (!cartDataString || cartDataString === 'undefined') {
        return [];
    }

    const cartItemsLocalStorage: TItemInCartLocalStorage[] = JSON.parse(cartDataString);
    const cartItemsDetails: TItemInCart[] = [];

    for (const item of cartItemsLocalStorage) {
        try {
            const { data, message } = await getProductBaseById(item.id);
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
export const getSingleCartItem = (id: string): {
    id: string,
    quantity: number,
} => {
    const cartDataString = localStorage.getItem('cart') as string;

    if (!cartDataString || cartDataString === 'undefined') {
        return {
            id: id,
            quantity: 1,
        }
    }

    const cartItems: TItemInCartLocalStorage[] = JSON.parse(cartDataString)
    if (cartItems.length === 0) {
        return {
            id: id,
            quantity: 1,
        }
    }

    const cartItem = cartItems.find(item => item.id === id)
    return {
        id: id,
        quantity: cartItem?.quantity || 1,
    }


};


// remove from cart of localstorage
export const removeFromCart = (id: string): {
    success: boolean,
    message: string
} => {
    try {
        const cartDataString = localStorage.getItem('cart');
        if (!cartDataString) {
            return { success: false, message: 'Items Not Found!' }
        }
        const cartData: TItemInCartLocalStorage[] = JSON.parse(cartDataString);
        const updatedCartData = cartData.filter((data) => data.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCartData));
        return { success: true, message: 'Removed successfully!' }
    } catch (error) {
        return { success: false, message: 'Some error occured!' }
    }
};
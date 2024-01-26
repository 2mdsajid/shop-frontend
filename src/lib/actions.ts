import { DUMMY_BAGS_DATA } from "./data"

// adding an item to cart -- in local storage
export const addToCart = (id: string, quantity: number) => {
    const existingCart = localStorage.getItem('cart');
    if (existingCart) {
        const parsedCart = JSON.parse(existingCart);
        parsedCart[id] = quantity;
        localStorage.setItem('cart', JSON.stringify(parsedCart));
    } else {
        const newCart = {
            [id]: quantity,
        };
        localStorage.setItem('cart', JSON.stringify(newCart));
    }
};

// get all cart items -- cart page
export const getCartItems = () => {
    const cartDataString = localStorage.getItem('cart');
    if (!cartDataString) {
        return [];
    }
    const cartData: Record<string, number> = JSON.parse(cartDataString);
    const cartItemsDetails: { details: any; quantity: number }[] = [];
    for (const [id, quantity] of Object.entries(cartData)) {
        const details = getSingleBagData(id);
        cartItemsDetails.push({
            details,
            quantity,
        });
    }

    return cartItemsDetails;
};

// get singel cart item
export const getSingleCartItem = (id: string) => {
    const cartDataString = localStorage.getItem('cart');
    if (!cartDataString) return 0;
    const cartData: Record<string, number> = JSON.parse(cartDataString);
    return cartData[id] || 0;
  };
  

// remove from cart of localstorage
export const removeFromCart = (id: string) => {
    const cartDataString = localStorage.getItem('cart');
    if (!cartDataString) {
        return;
    }
    const cartData: Record<string, number> = JSON.parse(cartDataString);
    if (cartData[id]) {
        delete cartData[id];
        localStorage.setItem('cart', JSON.stringify(cartData));
    }
};




export const getSingleBagData = (id: string) => {
    return DUMMY_BAGS_DATA.find(b => b.id === id)
}

// get current address from the iP
export const getCurrentAddress = async (ip: string) => {
    const response = await fetch(
        `https://ipinfo.io/${ip}/json?token=80ea4f6c43a232`
    );

    if (!response.ok) return null;
    const ipInfoResponse = await response.json();
    return ipInfoResponse
}


// basic type of any bag
export type TBasicBagInfo = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    brand: string;
    description?: string;
    isFreeDelivery?: boolean;
    itemsLeft?: number;
    images?: string[];
    isNew?: boolean;
    hasDiscount?: {
        state: boolean;
        value: number | 0;
    }
}

// basic type of any bag
export type TBasicBagInfoForEdit = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    brand: string;
    description: string;
    isFreeDelivery: boolean;
    itemsLeft: number;
    images: string[];
    isNew: boolean;
    hasDiscount: {
        state: boolean;
        value: number | 0;
    }
}

export type TOrderProduct = {
    name: string
    imageUrl: string
    category: string
    quantity: number
    price: number
}


export type TItemForCheckout = {
    id: string
    quantity: number
}
export type TItemForPlaceOrderToken = {
    id: string
    price: number
    quantity: number
}

export type TItemConfirmedOrder = {
    details: TBasicBagInfo
    price: number
    quantity: number
}

export type TOrderInfo = {
    id: string;
    createdAt: Date;
    status: string;
  }

export type TItemInCartLocalStorage = {
    id: string
    quantity: number
}

export type TItemInCart = {
    details: TBasicBagInfo
    quantity: number
}

export type TLocationFromIpApi = {
    ip: string
    city: string
    region: string
    country: string
    loc: string
    timezone: string
}
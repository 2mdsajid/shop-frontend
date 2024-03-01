

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

export type TOrderProduct = {
    name: string
    imageUrl: string
    category: string
    quantity: number
    price: number
}

export type TOrderStatus = 'created' | 'delivered' | 'shipping'

export type TOrderInfo = {
    id: string;
    createdAt: Date;
    status: TOrderStatus;
}

export type TOrderInfoExtended = TOrderInfo & {
    orderToken: string;
    User: {
        name: string;
        email: string;
    };
}

//for table data types
export type TOrderStatsTable = {
    id: string
    createdAt: string
    status: string
    userName: string
    userEmail: string
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
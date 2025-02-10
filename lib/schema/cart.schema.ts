import { TProductBase } from "./product.schema"

export type TItemInCartLocalStorage = {
    id: string
    quantity: number
}

export type TItemInCart = {
    details: TProductBase
    quantity: number
}


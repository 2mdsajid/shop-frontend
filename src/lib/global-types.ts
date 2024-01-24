
// basic type of any bag
export type TBasicBagInfo = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isNew?: boolean;
    hasDiscount?: {
        state: boolean;
        value: number | 0;
    }
}
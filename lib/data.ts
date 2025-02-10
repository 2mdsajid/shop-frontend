import { TOrderStatus } from "./schema/order.schema"

export const priceRanges = [
    { price: "999", color: "pink" },
    { price: "1599", color: "blue" },
    { price: "1999", color: "pink" },
    { price: "2599", color: "blue" },
  ]  as const
  

export const orderStatusArray = [
    "CREATED",
    "PROCESSING",
    "SHIPPED",
    "DELIVERED",
    "CANCELLED"
] as TOrderStatus[]
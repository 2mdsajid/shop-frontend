import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { TItemForCheckout } from "./global-types"
import jwt from 'jsonwebtoken';
import jose from 'jose';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// generate checkout token for user
export const generateCheckoutToken = (items: TItemForCheckout[]) => {
  const payload = { items };
  const secret = process.env.NEXT_PUBLIC_CHECKOUT_JWT_TOKEN as string
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token
}

// check a valid uuif
export function isValidUUID(inputStr: string) {
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(inputStr);
}

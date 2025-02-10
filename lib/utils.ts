import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// check a valid uuif
export function isValidUUID(inputStr: string) {
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(inputStr);
}




// date converter
export function formatDate(createdAt: Date) {
  const date = new Date(createdAt)
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

// trim long uuid
export function trimUUID(uuid: string) {
  const uuidRegex = /^[a-f\d]{8}-([a-f\d]{4}-){3}[a-f\d]{12}$/i;
  if (!uuidRegex.test(uuid)) {
    return 'nanananan'
  }
  const trimmedUUID = uuid.substring(0, 6);
  return `${trimmedUUID}..`;
}
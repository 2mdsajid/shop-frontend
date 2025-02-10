'use server'

import { TLocationFromIpApi } from "../schema/user.schema";

// get current address from the iP
export const getCurrentAddress = async (): Promise<TLocationFromIpApi | null> => {
    try {
        const ip = '103.146.218.156'
        const response = await fetch(
            `https://ipinfo.io/${ip}/json?token=80ea4f6c43a232`,
            {
                cache: 'no-store',
            }
        );

        if (!response.ok) return null;
        const ipInfoResponse = await response.json();
        return ipInfoResponse ?? null
    } catch (error) {
        return null
    }
}


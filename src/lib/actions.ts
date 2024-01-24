import { DUMMY_BAGS_DATA } from "./data"

// adding an item to cart -- in local storage
export const addToCart = (id: string) => {
    console.log("🚀 ~ addToCart ~ id:", id)
    window.alert(`🚀 ~ addToCart ~ id: ${id}`)
}

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
import { TAnnouncement } from "../schema/user.schema"

export const getAnnouncement = async (): Promise<{
    data: TAnnouncement | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.BACKEND}/announcement/get-announcement`, {
            cache: 'no-store',
            method: 'GET',
        })
        if (!response.ok) {
            const { data, message } = await response.json()
            return { data: null, message: message }
        }
        const { data, message } = await response.json()
        return { data, message }
    } catch (error) {
        console.log(error)
        return { data: null, message: 'Some Error Occured!' }
    }
}
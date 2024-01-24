import { getCurrentAddress } from '@/lib/actions'
import React from 'react'
import { Button } from '../ui/button'

type Props = {}


function LocateIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    )
}

function CurrencyIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="8" />
            <line x1="3" x2="6" y1="3" y2="6" />
            <line x1="21" x2="18" y1="3" y2="6" />
            <line x1="3" x2="6" y1="21" y2="18" />
            <line x1="21" x2="18" y1="21" y2="18" />
        </svg>
    )
}




type TLocationFromIpApi = {
    ip: string
    city: string
    region: string
    country: string
    loc: string
    timezone: string
}

const DisplayDeliveryInfo = async (props: Props) => {
    const ip = '103.146.218.156'
    const location = await getCurrentAddress(ip) as TLocationFromIpApi
    const { city, region,country } = location;
    return (
        <div className='w-full space-y-2'> 
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                    <LocateIcon className="text-gray-600 w-5 h-5" />
                    <span className="text-sm">{`${region}, ${city}, ${country} `}</span>
                </div>
                <Button className="text-blue-600">CHANGE</Button>
            </div>
            <div className="bg-green-100 text-green-800 text-sm p-2">
                Free Delivery 28 Jan - 29 Jan 3 - 4 day(s)
                <div className="text-xs">
                    Enjoy free shipping promotion with minimum spend of Rs. 699 from Looga Wears.
                </div>
            </div>
            <div className="text-sm">
                <CurrencyIcon className="text-gray-600 w-5 h-5 inline mr-1" />
                Cash on Delivery Available
            </div>
        </div>
    )
}

export default DisplayDeliveryInfo


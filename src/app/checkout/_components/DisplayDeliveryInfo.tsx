import { TLocationFromIpApi } from '@/lib/global-types'
import CheckoutChangeDeliveryDialog from './CheckoutChangeDeliveryDialog'
import { MdOutlineAttachMoney } from "react-icons/md";

type Props = {
    IPData: TLocationFromIpApi | null
    freeDeliveryInfo?: boolean
}



const DisplayDeliveryInfo = async (props: Props) => {
    const { IPData, freeDeliveryInfo } = props
    return (
        <div className='w-full space-y-2 bg-gray-50 p-4'>
            <h2 className="text-lg font-semibold">Delivery Address</h2>
            <div className="flex items-center justify-between">
                {IPData
                    ? <div>
                        <CheckoutChangeDeliveryDialog
                            cityName={IPData.city || ''}
                            countryName={IPData.country || ''}
                            stateName={IPData.region || ''}
                        />
                    </div>
                    : <div>
                        <p>Location cant be found. Please add manually!</p>
                        <CheckoutChangeDeliveryDialog
                            cityName={''}
                            countryName={''}
                            stateName={''}
                        />
                    </div>}
            </div>
            <div className="bg-green-100 text-green-800 text-sm p-2">
                <h3 className='text-lg font-semibold'>Free Delivery</h3>
                {freeDeliveryInfo
                    ? <div>
                        <p>28 Jan - 29 Jan 3 - 4 day(s)</p>
                        <div className="text-xs">
                            Enjoy free shipping promotion with minimum spend of Rs. 699 from Looga Wears.
                        </div>
                    </div>
                    : <div>
                        <p>N/A</p>
                    </div>
                }
            </div>
            <div className="flex gap-1 items-center">
                <MdOutlineAttachMoney className='text-lg' />
                Cash on Delivery Available
            </div>
        </div>
    )
}

export default DisplayDeliveryInfo


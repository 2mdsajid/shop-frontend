import { TBasicBagInfo } from '@/lib/global-types'
import React from 'react'
import PurseStatCard from './PurseStatCard'

type Props = {
    data: TBasicBagInfo[]
}

const PurseStateCards = (props: Props) => {
    const data = props.data
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((bagInfo) => (
                <PurseStatCard key={bagInfo.id} {...bagInfo} />
            ))}
        </div>
    );
}

export default PurseStateCards
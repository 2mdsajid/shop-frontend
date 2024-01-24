import BasicBagInfoCard from '@/components/reusable/BasicBagInfoCard'
import { TBasicBagInfo } from '@/lib/global-types'
import React from 'react'

type Props = {
    data: TBasicBagInfo[]
}

const SectionBagsDisplay = (props: Props) => {
    const { data } = props
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {data.map((d, i) => (
                <BasicBagInfoCard key={i} {...d} />
            ))}
        </div>)
}

export default SectionBagsDisplay
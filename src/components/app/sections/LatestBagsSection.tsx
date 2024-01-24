import { DUMMY_BAGS_DATA } from '@/lib/data'
import React from 'react'
import BasicBagInfoCard from '../../reusable/BasicBagInfoCard'
import SectionTitle from '../../reusable/SectionTitle'
import SectionBagsDisplay from './SectionBagsDisplay'

type Props = {}

const LatestBagsSection = (props: Props) => {
    const LatestBags = DUMMY_BAGS_DATA.filter(b => b.isNew)
    return (
        <section className='px-4 md:px-10 lg:px-20 xl:px-32'>
            <SectionTitle
                title='Latest Picks'
                description='Explore our latest collection of handcrafted handbags !'
            />
            <SectionBagsDisplay
                data={LatestBags}
            />
        </section>
    )
}

export default LatestBagsSection
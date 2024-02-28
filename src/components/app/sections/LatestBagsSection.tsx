import { DUMMY_BAGS_DATA } from '@/lib/data'
import React from 'react'
import BasicBagInfoCard from '../../reusable/BasicBagInfoCard'
import SectionTitle from '../../reusable/SectionTitle'
import SectionBagsDisplay from './SectionBagsDisplay'

type Props = {}

const getLatestBags = async () => {
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-latest`)
        const responseReturn = await response.json()
        return responseReturn
    } catch (error) {
        return { data: null, message: 'No Bags To DIsplay' }
    }
}

const LatestBagsSection = async (props: Props) => {
    // const LatestBags = DUMMY_BAGS_DATA.filter(b => b.isNew)
    const { data, message } = await getLatestBags()

    return (
        <section className='px-4 md:px-10 lg:px-20 xl:px-32'>
            <SectionTitle
                title='Latest Picks'
                description='Explore our latest collection of handcrafted handbags !'
            />
            {data ?
                <SectionBagsDisplay
                    data={data}
                /> :
                <div>
                    <p>{message}</p>
                </div>}
        </section>
    )
}

export default LatestBagsSection
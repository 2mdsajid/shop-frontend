import { getLatestBags } from '@/lib/actions'
import SectionBagsDisplay from './SectionBagsDisplay'
import SectionTitle from '@/components/reusable/SectionTitle'

type Props = {}



const LatestBagsSection = async (props: Props) => {
    // const LatestBags = DUMMY_BAGS_DATA.filter(b => b.isNew)
    const { data, message } = await getLatestBags()

    return (
        <section className='px-4 md:px-10 lg:px-20 xl:px-32 '>
            <SectionTitle
                title='Latest Picks'
                description='Explore our latest collection of handcrafted handbags !'
            />
            {(data && data.length > 0) ?
                <SectionBagsDisplay
                    data={data}
                /> :
                <div className='mb-5'> 
                    <p>No Bags To Display!</p>
                </div>}
        </section>
    )
}

export default LatestBagsSection
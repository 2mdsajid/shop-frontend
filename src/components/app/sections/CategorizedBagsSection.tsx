import { DUMMY_BAGS_DATA } from '@/lib/data'
import { TBasicBagInfo } from '@/lib/global-types'
import SectionBagsDisplay from './SectionBagsDisplay'
import SectionTitle from '../../reusable/SectionTitle'

type Props = {}

const CategorizedBagsSection = (props: Props) => {
    const categorizedBags: { [category: string]: TBasicBagInfo[] } = {};

    DUMMY_BAGS_DATA.forEach((bag) => {
        if (!categorizedBags[bag.category]) {
            categorizedBags[bag.category] = [];
        }
        categorizedBags[bag.category].push(bag);
    })

    return (
        <section className='px-4 md:px-10 lg:px-20 xl:px-32'>
            {Object.entries(categorizedBags).map(([category, bags]) => (
                <div key={category}>
                    <SectionTitle title={`${category}`} />
                    <SectionBagsDisplay data={bags} />
                </div>
            ))}
        </section>
    )
}

export default CategorizedBagsSection
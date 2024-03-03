import { DUMMY_BAGS_DATA } from '@/lib/data'
import { TBasicBagInfo } from '@/lib/global-types'
import SectionBagsDisplay from './SectionBagsDisplay'
import SectionTitle from '../../reusable/SectionTitle'
import { getProductsByCategory } from '@/lib/actions'
import ErrorPage from '@/components/reusable/ErrorPage'

type Props = {
    category: string
}

const CategorizedBagsSection = async (props: Props) => {
    const { category } = props
    // const categorizedBags: { [category: string]: TBasicBagInfo[] } = {};

    // DUMMY_BAGS_DATA.forEach((bag) => {
    //     if (!categorizedBags[bag.category]) {
    //         categorizedBags[bag.category] = [];
    //     }
    //     categorizedBags[bag.category].push(bag);
    // })

    const { data: categorizedBags, message } = await getProductsByCategory(category)
    
    if (!categorizedBags || categorizedBags.length === 0) {
        return (
            <ErrorPage message={message} />
        )
    }

    return (
        <SectionBagsDisplay data={categorizedBags} />
    )
}

export default CategorizedBagsSection
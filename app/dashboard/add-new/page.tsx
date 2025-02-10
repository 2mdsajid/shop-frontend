import { getCategories } from '@/lib/actions/product.actions';
import CreateProductForm from './_components/CreateProductForm';
import ErrorPage from '@/components/reusable/ErrorPage';

type Props = {}

const page = async (props: Props) => {
    const { data: categories, message } = await getCategories()
    if (!categories) {
        
        return <ErrorPage message={message} />
    }
    return (
        <div className='max-w-7xl mx-auto pb-0'>
            <h1 className="text-3xl font-serif text-brand-primary text-center mb-8">Add New Purse</h1>
            <CreateProductForm categories={categories} />
        </div>
    )
}

export default page
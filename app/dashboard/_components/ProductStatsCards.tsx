import { TProductBase } from '@/lib/schema/product.schema'
import ProductCardBasic from './ProductCardBasic'

type Props = {
    data: TProductBase[]
}

const ProductStatsCards = (props: Props) => {
    const data = props.data
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data.map((bagInfo) => (
                <ProductCardBasic key={bagInfo.id} product={bagInfo} />
            ))}
        </div>
    );
}

export default ProductStatsCards
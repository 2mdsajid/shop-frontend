import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ShippingDetails from "./ShippingDetails"

type Props = {
    description: string
    specifications: string | null
    careInstructions: string | null
    countryOfOrigin: string
    brand: string | null
}

const ProductDetailsTabs = (props: Props) => {
    const { description, specifications, careInstructions, brand, countryOfOrigin } = props

    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
                <AccordionTrigger>DESCRIPTION</AccordionTrigger>
                <AccordionContent>
                    <div className="prose max-w-none">
                        <p>{description}</p>
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="specifications">
                <AccordionTrigger>SPECIFICATIONS</AccordionTrigger>
                <AccordionContent>
                    {brand && <div className="prose max-w-none">
                        <p>{brand}</p>
                    </div>}
                    <div className="prose max-w-none">
                        <p>{specifications}</p>
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="care">
                <AccordionTrigger>USAGE AND CARE</AccordionTrigger>
                <AccordionContent>
                    <div className="prose max-w-none">
                        <p>{careInstructions}</p>
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping">
                <AccordionTrigger>SHIPPING</AccordionTrigger>
                <AccordionContent>
                    <ShippingDetails countryOfOrigin={countryOfOrigin} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default ProductDetailsTabs
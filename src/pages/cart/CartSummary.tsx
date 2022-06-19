import Button from "../../components/elements/Button"
import Heading from "../../components/elements/Heading"
import { SummaryItem } from "./index.styles"

export interface SummaryProps extends React.ComponentPropsWithoutRef<"div"> {
    type: string,
}

const CartSummary = () => {
    
    return(
        <div className="summary">
                <SummaryItem className="summaryItem" type="subTotal">
                    <Heading attrLevel="h3" className="summaryItemText" text="Subtotal" />
                    <Heading attrLevel="h4" className="summaryItemPrice" text="$ 43.99" />
                </SummaryItem>
                <Heading attrLevel="h3" className="summeryTitle" text="ORDER SUMMARY" />
                <SummaryItem className="summaryItem" type="estimated shipping">
                    <Heading attrLevel="h3" className="summaryItemText" text="Estimated Shipping" />
                    <Heading attrLevel="h4" className="summaryItemPrice" text="$ 5.99" />
                </SummaryItem>
                <SummaryItem className="summaryItem" type="shipping discount">
                    <Heading attrLevel="h3" className="summaryItemText" text="Shipping Discount" />
                    <Heading attrLevel="h4" className="summaryItemPrice" text="$ -5.99" />
                </SummaryItem>
                <SummaryItem className="summaryItem" type="total">
                    <Heading attrLevel="h3" className="summaryItemText" text="Total" />
                    <Heading attrLevel="h4" className="summaryItemPrice" text="$ 43.99" />
                </SummaryItem>
                <Button className="btn checkout" as="button" type="submit">
                    CHECKOUT NOW
                </Button>
                </div>

    )
};

export default CartSummary;
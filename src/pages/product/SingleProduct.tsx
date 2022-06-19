import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useIdProductWithStatuses } from "../../utils/hooks";
import { colorInlineOptions, sizeOptions } from "../../utils/variables";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import SelectDropDown from "../../components/dropDown/SelectDropDown";
import Banner from "../../components/elements/banner/Banner";
import Button from "../../components/elements/Button";
import Heading from "../../components/elements/Heading";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsLetters/NewsLetter";
import SelectInlineOptions from "../../components/selectInlineOptions/SelectInlineOptions";
import ApiStatusesComp from "../../components/elements/ApiStatusesComp";
import { AddContainer, Wrapper } from './index.styles';
// lazy media
const Image = lazy(() => import('../../components/elements/Image'));


const SingleProduct = () => {

    const { id } = useParams();
    const isId = id ? id : '';

    const { isLoading, isError, isSuccess, getState } = useIdProductWithStatuses(isId);
    const { title, image, description, price } = getState
    console.log(getState)

    // when real data need to be implemented with Redux and Selector
    // => check first if product size exist if not skip and outpout first size.length !== 0.
    // => do generic func to use in every DropDown component

    const defaultDropDownValue = sizeOptions[0];
    console.log("single product is rendering SSSSSSSSSSSSSSSSSSS")

    return (
        <Wrapper className='singleProductWrapper'>
            <Navbar />
            <Banner
                className="bannerSingleProduct"
                customHeight={40}
            >
                <Heading
                    className="titleBannerSingleProduct"
                    attrLevel="h1"
                    text="banner single product"
                />
            </Banner>
            <ApiStatusesComp
                response={getState}
                isLoading={isLoading}
                isError={isError}
                isSuccess={isSuccess}
            >
                <div className="singleProductContainer">
                    <Suspense
                        fallback={
                            <h1>Loading Image...</h1>
                        }
                    >
                        <Image
                            className="singleProductImg"
                            src={image}
                            alt={title}
                        />
                    </Suspense>
                    <div className="infoProduct">
                        <Heading attrLevel="h1" className="titleProduct" text={title} />
                        <Heading attrLevel="p" className="descriptionProduct" text={description} />
                        <Heading attrLevel="h2" className="priceProduct" text={`$ ${price}`} />
                        <div className="filterContainer">
                            <SelectInlineOptions
                                titleOptions="Color"
                                filterColor={colorInlineOptions}
                            />
                            <SelectDropDown
                                method="get"
                                filter={defaultDropDownValue}
                                list={sizeOptions}
                                disabledOptionText="size"
                            >
                                <Heading
                                    attrLevel="h3"
                                    className="optionsTitle"
                                    text="Size" />
                            </SelectDropDown>
                        </div>
                        <AddContainer className="addContainer">
                            <div className="amountContainer">
                                <Button
                                    className="btn remove"
                                    as="button"
                                    value=""
                                    type="reset"
                                    name=""
                                    onClick={() => console.log("remove btn")} >
                                    <Remove />
                                </Button>
                                <Heading className="amount" attrLevel="h3" text="1" />
                                <Button
                                    className="btn add"
                                    as="button"
                                    value=""
                                    type="submit"
                                    name=""
                                    onClick={() => console.log("add btn")} >
                                    <Add />
                                </Button>
                            </div>
                            <Button
                                className="btn addToCart"
                                as="button"
                                type="submit"
                                value=""
                                name=""
                                onClick={() => console.log("add to cart")} >
                                ADD TO CART
                                <ShoppingCart className="cartIcon" />
                            </Button>
                        </AddContainer>
                    </div>
                </div>
            </ApiStatusesComp>
            <NewsLetter />
            <Footer />
        </Wrapper>
    )
};

export default SingleProduct;
import React, { useEffect, useState } from 'react';
import SelectDropDown from "../../components/dropDown/SelectDropDown";
import Banner from "../../components/elements/banner/Banner";
import Heading from "../../components/elements/Heading";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsLetters/NewsLetter";
import { getProducts } from "../../features/products/productsSlice";
import { productsByCategory } from "../../selectors/filters";
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { colorOptions, priceOptions, sizeOptions } from '../../utils/variables';
import ProductsList from "../../components/products/ProductsList";
import { ProductItemProps } from '../../components/products/ProductPreview';
import { Wrapper } from "./index.styles";


const ProductCategory = () => {

    const [state, setState] = useState<ProductItemProps[]>([])
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useAppDispatch();


    // memoize selector to get products filtered by current param
    const productsFiltered = useAppSelector(productsByCategory);
    
    // store in redux the filtered products
    useEffect(() => {

        const filteredResult = dispatch(getProducts(productsFiltered));
        if (filteredResult.payload.length > 0) {
            setIsLoading(false);
            setState(filteredResult.payload);
        }

    }, [dispatch, productsFiltered]);


    {/** TO DO => KEEP LIST STATE FROM REDUX STORE => create selector to filter products options and compare them to 
    manual list created and stored in redux and disable options whithout products*/}

    return (
        <div>
            <Wrapper className="productCategory" >
                <Navbar />
                <Banner
                    className="bannerCategories"
                    customHeight={40}
                >
                    <Heading
                        className="titleBannerCategories"
                        attrLevel="h1"
                        text="banner"
                    />
                </Banner>
                <Heading
                    className="titleCategories"
                    attrLevel="h2"
                    text="Dresses"
                />
                <div className="filterContainer">
                    <div className="filter">
                        <Heading
                            className="text"
                            attrLevel="h3"
                            text="Filter by"
                        />
                        <SelectDropDown
                            method="get"
                            name="color"
                            filter="Color"
                            list={colorOptions}
                            disabledOptionText="Color"
                        />
                        <SelectDropDown
                            method="get"
                            name="size"
                            filter="Size"
                            list={sizeOptions}
                            disabledOptionText="Size"
                        />
                    </div>
                    <div className="filter">
                        <Heading
                            className="text"
                            attrLevel="h3"
                            text="Sort by"
                        />
                        <SelectDropDown
                            method="get"
                            name="price"
                            filter="Newest"
                            list={priceOptions}
                            disabledOptionText="Newest"
                        />
                    </div>
                </div>
                {isLoading ?
                    <h1>Loading Products</h1>
                    : <ProductsList listData={state} />
                }
                <NewsLetter />
                <Footer />
            </Wrapper>
        </div>
    )
};

export default ProductCategory;
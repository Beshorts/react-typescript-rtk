import React from 'react';
import Slider from '../../components/slider/Slider';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/elements/banner/Banner';
import Heading from '../../components/elements/Heading';
import { Wrapper } from './index.styles';
import Categories from '../../components/categories/Categories';
import NewsLetter from '../../components/newsLetters/NewsLetter';
import Footer from '../../components/footer/Footer';
import { useAllProductsWithStatuses } from '../../utils/hooks';
import ProductsList from '../../components/products/ProductsList';
import ApiStatusesComp from '../../components/elements/ApiStatusesComp';



const HomePage = () => {
    console.log("HOMEPAGE is rendering")

    // get all products State and render ProductList based on products API statuses
    const { state, isLoading, isError, isSuccess } = useAllProductsWithStatuses();

    return (
        <Wrapper className='homePage' aria-roledescription='home page'>
            <Banner
                className='homePageBanner'
                customHeight={30}
            >
                <Heading
                    attrLevel='h1'
                    className='headingBanner'
                    text="Super Deal! Free Shipping on Orders Over $50"
                />
            </Banner>
            <Navbar />
            <Slider />
            <Categories />
            <ApiStatusesComp
                response={state}
                isLoading={isLoading}
                isError={isError}
                isSuccess={isSuccess}
            >
                <ProductsList
                    listData={state}
                />
            </ApiStatusesComp>
            <NewsLetter />
            <Footer />
        </Wrapper>
    )
};

export default HomePage;


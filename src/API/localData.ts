// import local media
import slidePic1 from '../media/photos/slidepic1.jpg';
import slidePic2 from '../media/photos/slidepic2.jpg';
import slidePic3 from '../media/photos/slidepic3.jpg';
import categoryWoman from '../media/photos/categoryWomen.jpg';
import categoryMen from '../media/photos/categoryMen.jpg';
import categoryJewelry from '../media/photos/categoryJewelry.jpg';


// in a real world app those data will come from a CMS or API call

export interface SliderItemProps {
    id: number,
    img: string,
    title: string,
    description: string,
    bg: string,
} 

export const sliderItems = [
    {
        id: 1,
        img: slidePic1,
        title: "SUMMER SALE",
        description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "#e7db5b",
    },
    {
        id: 2,
        img: slidePic2,
        title: "WINTER SALE",
        description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "#58b8de",
    },
    {
        id: 3,
        img: slidePic3,
        title: "A JEWEL IS FOREVER",
        description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "#85c53d",
    },
]

export interface CategoryItemProps {
    id: number,
    img: string,
    title: string,
    cat: string,
} 

export const categories = [
    {
        id: 1,
        img: categoryWoman,
        title: "women's clothing",
        cat: "women's clothing"
    },
    {
        id: 2,
        img: categoryMen,
        title: "men's clothing",
        cat: "men's clothing"
    },
    {
        id: 3,
        img: categoryJewelry,
        title: "jewelery",
        cat: "jewelery"
    },
]   

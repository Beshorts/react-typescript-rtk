import React, { lazy } from 'react';

import Heading from "../elements/Heading";
import { SlideStyles, ButtonInfo } from './index.styles';
// data base for slider
import { SliderItemProps } from '../../API/localData';
// lazy media
const Image = lazy(() => import('../elements/Image'));


export interface SlideProps extends React.ComponentPropsWithRef<"div"> {
    item: SliderItemProps,
    customBg: string,
}


const Slide = ({ customBg, item }: SlideProps) => {

    // destructure item data
    const { img, title, description } = item;

    const handleClickBtn = () => {
        console.log("i'm btn")

    }

    return (
        <SlideStyles className="slide" customBg={customBg} item={item}>
            <Image
                className="imgSlide"
                src={img}
                alt="beatiful woman in yellow"
            />
            <div className="infoContainer">
                <Heading
                    attrLevel="h1"
                    className="title"
                    text={title}
                />
                <Heading
                    attrLevel="p"
                    className="description"
                    text={description}
                />
                <ButtonInfo
                    className="btn"
                    as="button"
                    name="btn submit"
                    value={title}
                    customBg={customBg}
                    type="submit"
                    onClick={handleClickBtn}
                >
                    SHOP NOW
                </ButtonInfo>
            </div>
        </SlideStyles>
    )
};

export default Slide;

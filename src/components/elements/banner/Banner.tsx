import React from 'react';
import { Wrapper } from './banner.styles';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    className: string,
    customHeight: number,
}


const Banner = ( {className, customHeight, children }: Props ) => {
    console.log(className)
    return(
        <Wrapper className={className} customHeight={customHeight}>
            {children}
        </Wrapper>
            
    )
};

export default Banner;
import { SliderItemProps } from '../../API/localData';
import { Dot, DotWrapper } from './index.styles';


export type DotNavProps = {
    dotAmount: SliderItemProps[],
}

export type DotProps = {
    currentIndex: boolean | number,
}

const DotNavigation = ({ currentIndex, dotAmount }: DotNavProps & DotProps) => {
    return (
        <DotWrapper className='dotContainer'>
            {dotAmount.map((item, index) => {
            const isActive = currentIndex === index;
                return (
                    <Dot
                        className={isActive === true ? 'dot active' : "dot" }
                        currentIndex={currentIndex === index}
                        key={item.id}
                    />
                )
            })};
        </DotWrapper>
    )
};

export default DotNavigation;
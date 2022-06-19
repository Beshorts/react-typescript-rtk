import React, { Suspense } from 'react';
// component
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import Slide from './Slide';
import ArrowIcon from './ArrowIcon';
//styles
import { SliderContainer, Wrapper } from './index.styles';
// custom hooks
import { useHandleArrowClick, useGetLocalData } from '../../utils/hooks';
// local data base
import { sliderItems, SliderItemProps } from '../../API/localData';
import DotNavigation from './DotNavigation';


export interface SliderContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  slideIndex: number,
}

const defaultSliderContainerProps: SliderContainerProps = {
  slideIndex: 0,
}

const Slider = () => {
  console.log("SLIDER is rendering")

  // destructuring customs  hooks
 const { response, error, loading } = useGetLocalData<SliderItemProps[]>(sliderItems);
 
  const { slideIndex, handleClick } = useHandleArrowClick(response, defaultSliderContainerProps.slideIndex);
  return (
    <Wrapper className='sliderWrapper'>
      {/* LOADING AND ERROR HAS TO BE IMPLEMENTED AS COMPONENT*/}
      {loading ? (
        <p>loading slider...</p>
      ) : (
        <>
          {error && (
            <>
              <p>OOPS SOMETHING WENT WRONG! PLEASE RELOAD PAGE...</p>
            </>
          )}
          <>
            <ArrowIcon
              direction="left"
              value="left"
              onClick={handleClick}
            >
              <ArrowLeftOutlined />
            </ArrowIcon>
            <SliderContainer
              className="sliderContainer"
              slideIndex={slideIndex}
            >
              <Suspense
                fallback={
                  <div>Loading SLides...</div>
                }
              >
                {response && response.map(item => (
                  <Slide
                    className="slide"
                    item={item}
                    customBg={item.bg}
                    key={item.id}
                  />
                ))}
              </Suspense>
            </SliderContainer>
            <ArrowIcon
              direction="right"
              value="right"
              onClick={handleClick}
            >
              <ArrowRightOutlined />
            </ArrowIcon>

          <DotNavigation currentIndex={slideIndex}  dotAmount={response} />
          </>
        </>
      )}
    </Wrapper>
  )
};

export default React.memo(Slider);
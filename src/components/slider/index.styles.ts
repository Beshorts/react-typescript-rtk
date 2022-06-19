import styled from "styled-components";
// import interfaces Props
import { SliderContainerProps } from "./Slider";
import { SlideProps } from "./Slide";
import { ArrowProps } from './ArrowIcon';
import Button from '../elements/Button';
import { DotProps } from './DotNavigation';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  .imgContainer {
    height: 100%;
    flex: 1;
  }

  .infoContainer {
    flex: 1;
    padding: 50px;
  }

  .imgSlide {
    height: 100%;
    width: 100%;
    object-fit: cover;

  }

  .title {
    font-size: 72px;
  }


  .description {
    margin: 50px 0pc;
    font-size:  20px;
    font-weight: 500;
    letter-spacing: 3px;
  }
`


export const ButtonInfo = styled(Button) <Pick<SlideProps, "customBg">>`
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 
  0.3em 0.3em 0 0 white,
  inset 0.3em 0.3em 0 0 black;

  &:hover,
  &:focus {
    box-shadow:
      0.3em 0.3em 0 0;
    :hover {
      color: ${props => props.customBg};
      font-weight: 500;
    }
    :active {
      box-shadow: 0px 5px 6px rgba(0,0,0,0.4);
    }
  }
`
export const SliderContainer = styled.div <Pick<SliderContainerProps, 'slideIndex'>>`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
    scroll-behavior: smooth;
`

export const Arrow = styled(Button) <Pick<ArrowProps, 'direction'>>`
  height: 50px;
  background-color: #fff7f7;
  border: none;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  width: 50px;
  opacity: 0.6;
  cursor: pointer;
`
// Slide.js styling
export const SlideStyles = styled.div <SlideProps>`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.customBg};
  display: flex;
  align-items: center;
`

export const DotWrapper = styled.div`
  position: absolute;
  justify-self: center;
  align-self: flex-end;
  width: 100%;
  display: flex;
  justify-content: center;
  `

export const Dot = styled.div<DotProps>`
  width: 30px;
  height: 8px;
  border-radius: 20%;
  margin: 0 20px 20px 0;
  background-color: ${props => props.currentIndex ? "white" : "rgba(255, 255, 255, 0.5)"};
`
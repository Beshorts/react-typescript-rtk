import styled from "styled-components";
import Button from "../elements/Button";


// PRODUCTS LIST

export const Wrapper = styled.section`
padding: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
background-color: white;

 .itemList {
        flex: 1;
        display: flex;
   }
   
`

// PRODUCT

export const IconBtnContainer = styled(Button)`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

export const ProductContainer = styled.div`
  flex: 1;
  margin: 8px;
  display: flex;
  //flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;


  .iconBtnContainer {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  &:Hover ${IconBtnContainer} {
      opacity: 1;
      border: none;
  }

  // class inherit from Image component elements folder
  .imgContainer {
    width: 320px;
    max-height: 286px;
    padding: 0px 58px;
    display: flex;
    justify-content: center;
    z-index: 2;
    
    .imgProduct {
      max-width: 100%;
         padding: 20px;
      }
  }

  .icon {
    color: black;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    padding: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease; 
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }
  }
`

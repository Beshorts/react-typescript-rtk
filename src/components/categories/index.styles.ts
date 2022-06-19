import styled from "styled-components";
import Button from "../elements/Button";

export const Wrapper = styled.main`
display: flex;
padding: 20px;
justify-content: space-between;
  
`

export const CategoryStyles = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  .imgCategory {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  .infoCategory {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;;
      align-items: center;
      justify-content: center;
  }

  .titleCategory {
      color: white;
      margin-bottom: 20px;
      text-shadow: 2px 4px 4px #595957;
  }
`

export const ButtonCategory = styled(Button)` 
      border: 2px solid black;
      font-size: 16px;
      font-weight: 600;
      border-radius: 30px;
      padding: 10px 20px 10px 20px;
      background-color: white;
      cursor: pointer;
`
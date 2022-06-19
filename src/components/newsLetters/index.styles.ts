import styled from "styled-components";

export const Wrapper = styled.main`
  height: 68vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .titleNewsLetter {
    font-size: 70px;
    margin-bottom: 20px;
  }

  .descNewsLetter {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .inputBtnContainer {
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 40px;
    background-color: white;
    border: 1px solid black;

    .formNewsLetter {
      width: 100%;

      .inputNewsLetter {
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 20px;
      }
    }
    .btn {
      width: 66px;
      border: none;
      color: white;
      background-color: black;
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";


export const Wrapper = styled.main`
  
  .titleCategoies {
      margin: 20px;

  }
  .filterContainer {
      display: flex;
      justify-content: space-between ;

      .filter {
          width: 100%;
          margin: 20px;
          display: flex;
          align-items: center;
          &:nth-child(2) {
              justify-content: flex-end;
          }

            .text {
                font-size: 20px;
                font-weight: 500;
                margin-right: 20px;
            }

            .optionText {
              font-size: 18px;
            }

            .dropDown {
                margin-left: 10px;
                .dropDwonSelect {
                    padding: 10px;
                    margin-right: 20px;
            }
        }
        
      }
  }

`
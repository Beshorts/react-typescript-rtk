import styled from "styled-components";


export const Wrapper = styled.main`
  .singleProductContainer {
        padding: 50px;
        display: flex;

        .imgContainer {
            flex: 1;
            display: flex;
            align-items: center;

            .singleProductImg {
                width: 30vw;
            }
        }

      .infoProduct {
          flex: 20%;
          padding: 0px 50px;

          .titleProduct {
              font-weight: 200;
          }

          .descriptionProduct {
              margin: 20px 0px;
          }

          .priceProduct {
              font-weight: 800;
              font-size: 30px;
          }
        }

        .filterContainer {
            display: flex;

            .optionsTitle, .inlineOptionsTitle {
                font-size: 16px;
                font-weight: 400;
                margin-right: 10px;
            }

            .selectInlineOptions, .dropDown {
                width: 50%;
                margin: 30px 0px;
                display: flex;
                -webkit-box-align: center;
                align-items: center;

                .filterOption {
                    min-width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 2px solid grey;
                    margin: 0 5px;
                    cursor: pointer;
                }
                .dropDownSelect {
                    padding: 0px 12px;
                }
            }
        }

    }

`
export const AddContainer = styled.div`
    display: flex;
  
    .btn {
        border: none;
        cursor: pointer;
        box-shadow: none;
        transition: all 0.5s ease;
        &:hover {
            box-shadow: -1px 2px 6px 1px rgba(0,0,0,0.3);
        }
    }

    .amountContainer {
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
          font-size: 16px;
      }
     
    .add, .remove {
        border: none;
        background-color: grey-lighter;
        color: black;
        padding: 4px;
        border-radius: 4px;
        transition: all 0.5s ease;

        &:hover {
            color: white;
            background-color:  grey;
        }
    }
      
  }
    .addToCart {
        margin-left: 26px;
        font-weight: 600;
        font-size: 14px;;
        background-color: lightcoral;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        transition: all 0.5s ease-in-out;
       
        .cartIcon {
            margin-left: 10px;
            font-size: 20px;
        }

        &:hover {
            background-color: coral;
        }
    }
   
`



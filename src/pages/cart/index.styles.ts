import styled from "styled-components";
import Button from "../../components/elements/Button";
import { ButtonStyledProps } from "./CartPage";
import { SummaryProps } from './CartSummary';


export const Wrapper = styled.div`

  
  .cartBanner {
      background-color: coral;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      
      .bannerTitle {
          font-size: 14px;
      }
}

.cartContainer {
      padding: 10px;

      .title {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
      }

      .topCartContainer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;

            .topTitle {
                display: flex;
                align-items: center;
                justify-content: center;

              .cartTextAmount, .WishListTextAmount {
                 text-decoration: underline;
                 margin: 0px 10px;
                 cursor: pointer;
              }

            }
      }
      .bottomCartContainer {
          display: flex;
          justify-content: space-between;

        .productInfo {
            flex: 3;

            .product {
                display: flex;
                justify-content: space-between;
                .productDetail {
                    flex: 2;
                    display: flex;
                    .imgContainer {
                        width: 200px;
                        .imageProduct {
                            width: 100%;
                        }
                    }
                    .details {
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        
                        .productTitle {
                            font-size: 18px;
                            font-weight: 500;
                            
                    }
                    .productId {
                        font-size: 14px;
                        font-weight: 600;
                        
                    }
                    
                    .productSize {
                        font-size: 18px;
                        font-weight: 500;
                        
                    }

                    .inlineOptionsTitle {
                        font-size: 16px;
                        font-weight: 400;
                        margin-right: 10px;
                        
                    }
                    .selectInlineOptions {
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
                    }
                }
                
            }
            
            .priceDetail {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .productAmountContainer {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;

                    .productAmount {
                        font-size: 24px;
                        margin: 5px;

                    }
                }
                .productActualPrice {
                    font-size: 30px;
                    font-weight: 300;


                }
                
            }
        }

        }

        .summary {
            flex: 1;
            border: 0.5px solid lightgrey;
            border-radius: 10px;
            padding: 10px;
            height: 50vh;
            .summeryTitle {
                font-weight: 200;

            }

            .summaryItemText {

            }
            .summaryItemPrice {

            }
            .btn {
                width: 100%;
                padding: 10px;
                background-color: black;
                color: white;
                font-size: 16px;
                font-weight: 500;
                border: none;
                cursor: pointer;
                
            }
        }
      }
  }

`
export const ButtonStyles = styled(Button) <ButtonStyledProps>`
    padding: 10px;
    font-weight: 600;
    border: ${props => props.aspect && "none"};
    background-color: ${props => props.aspect  ? "black" : "transparent"};
    color: ${props => props.aspect && "white"};
    cursor: pointer;
`

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 3px;
`

export const SummaryItem = styled.div<SummaryProps>`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};

` 
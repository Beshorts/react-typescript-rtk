import styled from "styled-components";


export const Wrapper = styled.main`
  display: flex;
   .footerLeft {
       flex: 1;
       display: flex;
       flex-direction: column;
       padding: 20px;
        .description {
            margin: 20px 0px;
        }
        .iconContainer {
            display:flex;
            .icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                color: white;
                background-color: black;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 20px;
            }
        }
   }

   .footerCenter {
       flex: 1;
       padding: 20px;

       .title {
           margin-bottom: 30px;
           text-align: center;
       }

       .list {
           list-style: none;
           display: flex;
           flex-wrap: wrap;
           text-align: center;

       }
       .listItem {
           width: 100%;
           margin-bottom: 10px;

       }
   }

   .footerRight {       
       flex: 1;
       padding: 20px;
       
       .title {
         margin-bottom: 20px;
       }
       .infoContainer {
           margin-bottom: 20px;
           display: flex;
           flex-direction: row;
           align-items: center;

           .contact {
               padding-left: 10px;
           
        }
       }
       .payment {
           width: 80%;
       }
   }


`
import {createGlobalStyle} from "styled-components"

// minimum css global starter
const GlobalStyles =  createGlobalStyle`
  * {
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Urbanist', sans-serif;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;

       ::-webkit-scrollbar {
         display: none;
      }     
    }
`
  export default GlobalStyles;
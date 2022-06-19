import styled from 'styled-components';
import { device } from '../../utils/responsive';

export const Wrapper = styled.nav`
  height: 3.75rem;
  padding: 0.625rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;


  
  
  .searchBar, .logo, .menu {
      flex: 1;
  }

  .searchBar {
      display: flex;
      align-items: center;
  }

  .logo {
      text-align: center;
  }

  .menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      :last-child {
        padding-right: 20px;

      }
  }

  .language {
      font-size: 14px;
      cursor: pointer;
  }
  
  h1 {
      font-weight: 600;
  }
`



console.log("devices ", device);

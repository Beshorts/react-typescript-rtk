import styled from "styled-components";
// import interface Props 
import { Props } from "./Banner";

export const Wrapper = styled.div<Props>`
  height: ${props => props.customHeight ? props.customHeight : 50}px;

`
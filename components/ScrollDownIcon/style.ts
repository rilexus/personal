import styled, {keyframes} from "styled-components";

const scrollInner = keyframes`
  from {margin-top: 15%;}
  to {margin-top: 50%;}
`;

const scrollMouse = keyframes`
  from {margin-top: 0;}
  to {margin-top: 15px;}
`
const StyledMouse = styled.div`
  position:relative;
  margin:0 auto;
  display:block;
  width: 25px;
  height: 40px;
  border: solid 2px #7b7b7b;
  border-radius: 13px;
  -webkit-animation: ${scrollMouse} 1.5s;
  animation: ${scrollMouse} 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
`;

const StyledScrollDown = styled.span`
  display:block;
  width:7px;
  height:7px;
  background: #7B7B7B;
  border-radius:50%;
  margin:15% auto auto auto;

  -webkit-animation: ${scrollInner} 1.5s;
  animation: ${scrollInner} 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function:ease;
  animation-timing-function:ease
`;

export { StyledMouse, StyledScrollDown }
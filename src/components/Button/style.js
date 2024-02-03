import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.isBack ? 'linear-gradient(157deg, rgba(129, 51, 155, 0.6) 0.84%, rgba(129, 51, 155, 0.6) 0.85%, rgba(74, 78, 13, 5.60) 100%)' : 'linear-gradient(157deg, rgba(74, 78, 13, 5.60) 0.84%, rgba(74, 78, 13, 5.60) 0.85%, rgba(129, 51, 155, 0.6) 100%)'};
  backdrop-filter: blur(22.5px);
  border: solid 1px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.55);

  width: 282px;
  height: 38px;

  color: #fff;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px;

  text-decoration: none;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
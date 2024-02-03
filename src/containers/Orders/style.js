import styled from "styled-components";
import Background from "../../assets/background-pedidos.svg";

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${Background}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const Image = styled.img`
  margin-top: 11px;
  width: 170px;
`;

export const Button = styled.button`
  background: linear-gradient(157deg, rgba(129, 51, 155, 0.6) 0.84%, rgba(129, 51, 155, 0.6) 0.85%, rgba(74, 78, 13, 5.60) 100%);
  backdrop-filter: blur(22.5px);
  border: solid 1px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.55);

  width: 282px;
  height: 38px;

  text-decoration: none;
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px;
  margin-top: 20px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 282px;
  height: 88px;

  border: none;
  outline: none;

  margin-top: 10px;

  padding: 10px;

  div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  p {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 5px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer
  }
`;

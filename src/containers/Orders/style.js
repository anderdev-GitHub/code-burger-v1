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

  margin: 22px 0 22px 0;

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

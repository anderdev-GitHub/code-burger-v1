import styled from "styled-components";
import Backgroun from "./assets/background-home.svg";

export const Container = styled.div`
  background: url("${Backgroun}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;
export const Image = styled.img`
  margin-top: 11px;
  width: 270px;
`;

export const ContainerItens = styled.div`
  background: rgba(129, 51, 155, 0.6);
  padding: 26px 26px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  border-radius: 20px 20px;

  margin-bottom: 5px;
`;

export const H1 = styled.h1`
  color: #eee;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 10px;
`;

export const InputLabel = styled.p`
  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;

  margin-left: 15px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 282px;
  height: 38px;

  border: none;
  outline: none;

  padding-left: 15px;
  margin-bottom: 22px;

  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  &::placeholder {
    color: #bcc622;
  }
`;

export const Button = styled.button`
  background-color: #bcc622;

  width: 282px;
  height: 38px;

  color: #fff;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5px;

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
  justify-content: space-around;
  align-items: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 282px;
  height: 38px;

  border: none;
  outline: none;

  margin-top: 10px;

  p {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer
  }
`;

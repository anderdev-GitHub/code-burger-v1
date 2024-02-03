import styled from "styled-components";
import Background from "../../assets/background-home.svg";

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
  width: 270px;
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
    color: #000;
  }
`;

export const Button = styled.button`
  background: linear-gradient(157deg, rgba(74, 78, 13, 5.60) 0.84%, rgba(74, 78, 13, 5.60) 0.85%, rgba(129, 51, 155, 0.6) 100%);
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
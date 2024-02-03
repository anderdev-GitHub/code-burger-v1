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
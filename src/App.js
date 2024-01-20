import React from "react";

import LogoHome from "./assets/logo-home.svg"

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./style";

const App = () => {
  return (
    <Container>
      <Image alt="logo-imagem" src={LogoHome}/>
      <ContainerItens>
      <H1>Faça seu pedido!</H1>
      <InputLabel>Pedido</InputLabel>
      <Input placeholder="Ex: 1 Coca-Cola, 1-X Salada"></Input>

      <InputLabel>Nome do Cliente</InputLabel>
      <Input placeholder="Ex: Satoru Gojo"></Input>

      <Button>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;

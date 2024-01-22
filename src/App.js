import React from "react";

import LogoHome from "./assets/logo-home.svg";
import Trash from "./assets/lixeira.svg"

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User
} from "./style";

const App = () => {
  const users = [
    { id: Math.random(), name: "Anderson", age: 28 },
    { id: Math.random(), name: "Anne", age: 28 },
  ];

  return (
    <Container>
      <Image alt="logo-imagem" src={LogoHome} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Ex: 1 Coca-Cola, 1-X Salada"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Ex: Satoru Gojo"></Input>

        <Button>Novo Pedido</Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button><img src={Trash} alt="lata-de-lixo"/></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;

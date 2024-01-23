import React, { useState, useRef } from "react";

import LogoHome from "./assets/logo-home.svg";
import Trash from "./assets/lixeira.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,
} from "./style";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();

  const addNewOrder = () => {
    setUsers([
      ...users,
      {
        id: Math.random(),
        order: inputOrder.current.value,
        name: inputName.current.value,
      },
    ]);
  };

  return (
    <Container>
      <Image alt="logo-imagem" src={LogoHome} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Ex: 1 Coca-Cola, 1-X Salada"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Ex: Satoru Gojo"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <div>
                <p>{user.order}</p>
                <p>
                  <b>{user.name}</b>
                </p>
              </div>
              <button>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;

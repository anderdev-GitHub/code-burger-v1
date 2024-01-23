import React, { useState } from "react";

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
  /*  const users = []; */

  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState();
  const [name, setName] = useState();

  const addNewOrder = () => {
    setUsers([{id: Math.random(), order, name}])
  };

  const changeInputOrder = (event) => {
    setOrder(event.target.value)
  }

  const changeInputName = (event) => {
    setName(event.target.value)
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={LogoHome} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input onChange={changeInputOrder} placeholder="Ex: 1 Coca-Cola, 1-X Salada"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input onChange={changeInputName} placeholder="Ex: Satoru Gojo"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <div>
              <p>{user.order}</p>
              <p><b>{user.name}</b></p>
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

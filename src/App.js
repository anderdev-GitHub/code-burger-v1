import React, { useState, useRef } from "react";

import axios from "axios";

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

  const addNewOrder = async () => {
    const { data: newUser } = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      clientName: inputName.current.value,
    });

    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  return (
    <Container>
      <Image alt="logo-imagem" src={LogoHome} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input
          ref={inputOrder}
          placeholder="Ex: 1 Coca-Cola, 1-X Salada"
        ></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Ex: Satoru Gojo"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <div>
                <p>{user.order}</p>
                <p>
                  <b>{user.clientName}</b>
                </p>
              </div>
              <button onClick={() => deleteUser(user.id)}>
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

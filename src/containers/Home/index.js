import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import LogoHome from "../../assets/logo-home.svg";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from "./style";

const App = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const inputOrder = useRef();
  const inputName = useRef();

  const addNewOrder = async () => {
    const { data: newUser } = await axios.post("https://api-simulada-hamburgueria.vercel.app/order", {
      order: inputOrder.current.value,
      clientName: inputName.current.value,
    });

    setUsers([...users, newUser]);

    history.push("/pedidos");
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
      </ContainerItens>
    </Container>
  );
};

export default App;

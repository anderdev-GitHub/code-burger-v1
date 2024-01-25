import React, { useState, useEffect } from "react";

import axios from "axios";

import LogoPedidos from "../../assets/logo-pedidos.svg";
import Trash from "../../assets/lixeira.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from "./style";

const Orders = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUsers } = await axios.get("http://localhost:3001/order");

      setUsers(newUsers);
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    const response = await axios.delete(
      `http://localhost:3001/order/${userId}`
    );

    // Exibe a mensagem em um alerta
    window.alert(response.data.message);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  return (
    <Container>
      <Image alt="logo-imagem" src={LogoPedidos} />
      <ContainerItens>
        <H1>Pedidos</H1>

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

        <Button>Voltar</Button>
      </ContainerItens>
    </Container>
  );
};

export default Orders;

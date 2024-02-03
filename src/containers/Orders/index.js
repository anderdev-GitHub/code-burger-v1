import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import LogoPedidos from "../../assets/logo-pedidos.svg";
import Trash from "../../assets/lixeira.svg";

import H1 from "../../components/Title"

import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button";

import { Container, Image, User } from "./style";

const Orders = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

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

  const goBackPage = () => {
    history.push("/");
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

        <Button isBack={true} onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
};

export default Orders;

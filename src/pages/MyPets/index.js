import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
// import api from '~/services/api';

import { Container, Header, AddNewPet } from './styles';

export default function MyPets() {
  return (
    <Container>
      <Header>
        <h1>Meus Pets</h1>
        <span>Gerencie os pets que você cadastrou</span>
      </Header>
      <AddNewPet>
        <span>Cadastrar Pet</span>
        <MdAddCircleOutline size={80} />
      </AddNewPet>
    </Container>
  );
}

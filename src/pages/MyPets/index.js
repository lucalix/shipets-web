import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
// import api from '~/services/api';

import { Container, AddNewPet } from './styles';

export default function MyPets() {
  return (
    <Container>
      <AddNewPet>
        <span>Cadastrar novo PET</span>
        <MdAddCircleOutline size={80} />
      </AddNewPet>
    </Container>
  );
}

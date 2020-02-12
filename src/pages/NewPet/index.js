import React from 'react';

import { Container, ChooseSpecie } from './styles';
import iconCat from '~/assets/icon-cat-grey.png';
import iconDog from '~/assets/icon-dog-grey.png';

export default function NewPet() {
  return (
    <Container>
      <div className="title">
        <h1>Vamos cadastrar um Pet!</h1>
        <span>Seu pet é um...</span>
      </div>

      <ChooseSpecie>
        <div>
          <img src={iconDog} alt="LogoBlue" height="80px" />
          <span>Cachorro</span>
        </div>

        <div>
          <img src={iconCat} alt="LogoBlue" height="80px" />
          <span>Gato</span>
        </div>
      </ChooseSpecie>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, StepContainer, StepInfo, Step1, Specie } from './styles';

export default function NewPet() {
  const [title, setTitle] = useState();
  const [auxText, setAuxText] = useState();
  const [species, setSpecies] = useState([]);
  const [selectedSpecie, setSelectedSpecie] = useState(null);
  const [steps, setSteps] = useState([
    {
      id: 1,
      disabled: false,
      selected: true,
    },
    {
      id: 2,
      disabled: true,
      selected: false,
    },
    {
      id: 3,
      disabled: true,
      selected: false,
    },
  ]);

  // Get species from API
  useEffect(() => {
    async function getSpecies() {
      const response = await api.get('/species');

      setSpecies(response.data);
    }

    getSpecies();
  }, []);

  // Change Title when change step
  useEffect(() => {
    function handleChangeTitle() {
      const specieName = selectedSpecie
        ? selectedSpecie.name.toLowerCase()
        : 'pet';

      if (steps[0].selected === true) {
        setTitle('Vamos cadastrar um Pet!');
        setAuxText('Seu pet é um...');
      }

      if (steps[1].selected === true) {
        setTitle(`Conte-nos um pouco mais sobre seu ${specieName}`);
        setAuxText(`Descreva abaixo como ele(a) é:`);
      }

      if (steps[2].selected === true) {
        setTitle(`Envie algumas fotos de seu ${specieName}`);
        setAuxText(
          `Caso não possua nenhuma nesse momento, pode nos enviar mais tarde :)`
        );
      }
    }

    handleChangeTitle();
  }, [selectedSpecie, steps]);

  function handleChangeStep(selectedStepId) {
    const auxSteps = steps.map(step => {
      if (step.id === selectedStepId) {
        step.disabled = false;
        step.selected = true;
      }

      if (step.id !== selectedStepId) {
        step.selected = false;
      }

      return step;
    });

    setSteps(auxSteps);
  }

  function handleSelectSpecie(specie) {
    setSelectedSpecie(specie);

    handleChangeStep(2);
  }

  return (
    <Container>
      <StepContainer>
        <StepInfo
          disabled={steps[0].disabled}
          selected={steps[0].selected}
          onClick={() => handleChangeStep(1)}
        >
          <div className="circularInfo">1</div>
          <div>
            <p>Etapa 1</p>
            <span>Selecione a Espécie</span>
          </div>
        </StepInfo>

        <StepInfo
          disabled={steps[1].disabled}
          selected={steps[1].selected}
          onClick={() => handleChangeStep(2)}
        >
          <div className="circularInfo">2</div>
          <div>
            <p>Etapa 2</p>
            <span>Descreva o Pet</span>
          </div>
        </StepInfo>

        <StepInfo
          disabled={steps[2].disabled}
          selected={steps[2].selected}
          onClick={() => handleChangeStep(3)}
        >
          <div className="circularInfo">3</div>
          <div>
            <p>Etapa 3</p>
            <span>Escolha as Fotos</span>
          </div>
        </StepInfo>
      </StepContainer>

      <div className="title">
        <h1>{title}</h1>
        <span>{auxText}</span>
      </div>

      {steps[0].selected === true && (
        <Step1>
          {species.map(s => (
            <Specie key={s.name} onClick={() => handleSelectSpecie(s)}>
              <img src={s.avatar.url} alt="LogoBlue" height="80px" />
              <span>{s.name}</span>
            </Specie>
          ))}
        </Step1>
      )}
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { Form, Input, Textarea, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import {
  Container,
  StepContainer,
  StepInfo,
  Step1,
  Specie,
  Step2,
} from './styles';

export default function NewPet() {
  const [title, setTitle] = useState();
  const [auxText, setAuxText] = useState();
  const [species, setSpecies] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedSpecie, setSelectedSpecie] = useState(null);
  const [statesUf, setStatesUf] = useState([]);
  const [cities, setCities] = useState([]);
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

  const schemaStep2 = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    description: Yup.string(),
    sex: Yup.string().required('O sexo é obrigatório.'),
    date_of_birth: Yup.string().required('A data de nascimento é obrigatória.'),
    breed_id: Yup.string().required('A raça é obrigatória.'),
    state: Yup.string().required('O estado é obrigatório.'),
    citie_id: Yup.string().required('A cidade é obrigatória.'),
  });

  // Get species from API
  useEffect(() => {
    async function getApiData() {
      const [speciesApi, statesUfApi] = await Promise.all([
        api.get('/species'),
        api.get('/states'),
      ]);

      const formattedStates = statesUfApi.data.map(uf => {
        return {
          id: uf.id,
          title: uf.name,
        };
      });

      setSpecies(speciesApi.data);
      setStatesUf(formattedStates);
    }

    getApiData();
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
          `O Pet foi cadastrado! Envie algumas fotos dele para aumentar as chances de encontrar um parceiro(a).`
        );
      }
    }

    async function getApiBreeds() {
      if (selectedSpecie) {
        const response = await api.get(
          `/breeds?specie_id=${selectedSpecie.id}`
        );

        const formattedBreeds = response.data.map(breed => {
          return {
            id: breed.id,
            title: breed.name,
          };
        });
        setBreeds(formattedBreeds);
      }
    }

    handleChangeTitle();
    getApiBreeds();
  }, [selectedSpecie, steps]);

  function handleChangeStep(selectedStepId, disableOthers = false) {
    const auxSteps = steps.map(step => {
      if (step.id === selectedStepId) {
        step.disabled = false;
        step.selected = true;
      }

      if (step.id !== selectedStepId) {
        step.selected = false;
      }

      if (disableOthers === true && step.id !== selectedStepId) {
        step.disabled = true;
      }

      return step;
    });

    setSteps(auxSteps);
  }

  async function handleSelectSpecie(specie) {
    setSelectedSpecie(specie);

    handleChangeStep(2);
  }

  async function handleChangeState(event) {
    const stateId = event.target.value;

    const response = await api.get(`/cities?state_id=${stateId}`);

    const formattedCities = response.data.map(citie => {
      return {
        id: citie.id,
        title: citie.name,
      };
    });

    setCities(formattedCities);
  }

  async function handleSubmit({
    name,
    description,
    date_of_birth,
    breed_id,
    citie_id,
  }) {
    // const response = await api.post(`/teste`, {
    //   name,
    //   description,
    //   breed_id: breed.id,
    //   citie_id: citie.id,
    // });

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    console.log({
      name,
      description,
      date_of_birth: `${date_of_birth}T23:59:59-03:00`,
      breed_id: Number(breed_id),
      citie_id: Number(citie_id),
      timezone,
    });

    handleChangeStep(3, true);

    toast.success('Pet cadastrado com sucesso!');
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
            <Specie
              key={s.name}
              onClick={() => handleSelectSpecie(s)}
              selected={selectedSpecie ? s.id === selectedSpecie.id : false}
            >
              <img src={s.avatar.url} alt="LogoBlue" height="80px" />
              <span>{s.name}</span>
            </Specie>
          ))}
        </Step1>
      )}

      {steps[1].selected === true && (
        <Step2>
          <Form onSubmit={handleSubmit} schema={schemaStep2}>
            <Input name="name" type="text" label="Nome" />
            <Textarea
              name="description"
              label="Descreva o pet"
              placeholder="Descreva o temperameto, o que ele gosta de fazer, etc"
            />
            <Select
              name="sex"
              label="Sexo"
              options={[
                { id: 'm', title: 'Macho' },
                { id: 'f', title: 'Fêmea' },
              ]}
            />
            <Input
              name="date_of_birth"
              type="date"
              label="Data de nascimento"
            />
            <Select name="breed_id" label="Raça" options={breeds} />
            <Select
              name="state"
              label="Estado (UF) em que o pet se encontra"
              options={statesUf}
              onChange={handleChangeState}
            />
            <Select
              name="citie_id"
              label="Cidade em que o pet se encontra"
              options={cities}
            />
            <button type="submit">Cadastrar pet</button>
          </Form>
        </Step2>
      )}
    </Container>
  );
}

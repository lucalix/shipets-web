import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  background: #fff;
  padding: 20px 30px 30px 30px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  div.title {
    margin: 10px;
    h1 {
      font-size: 24px;
      color: #333;
      font-weight: bold;
    }

    span {
      font-size: 16px;
      color: #666;
    }
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 10px 10px 20px;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const StepInfo = styled.button`
  display: flex;
  align-items: center;

  text-align: left;
  border: none;
  background: none;
  max-width: 200px;
  margin-right: 15px;
  cursor: pointer;

  div.circularInfo {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    margin-right: 8px;
    border: ${props => (props.selected ? '2px' : '1px')} solid
      ${props => (props.selected ? '#49a4fc' : 'rgba(0, 0, 0, 0.5)')};
    border-radius: 50%;
    justify-content: center;
  }
`;

export const Step1 = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 70px auto;
`;

export const Specie = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px;
  margin: auto 50px;
  height: 200px;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  background: ${props => (props.selected ? 'rgba(0, 0, 0, 0.3)' : '#fff')};
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  span {
    margin-top: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }
`;

export const Step2 = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input,
    textarea,
    select {
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;
      font-size: 16px;
      background: #fff;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
`;

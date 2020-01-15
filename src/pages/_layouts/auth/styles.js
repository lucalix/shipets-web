import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  background: linear-gradient(-90deg, #3b9eff, #36d1d6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Alegreya:400i&display=swap');

  width: 100%;
  max-width: 315px;
  text-align: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h1 {
      color: #fff;
      font-weight: bold;
      font-size: 32px;
      margin-left: 5px;
      font-weight: 200;
      font: 32px 'Alegreya', sans-serif;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
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

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-height: 1020px;
  margin: auto auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  margin: 30px 30px;
  align-self: flex-start;

  h1 {
    font-size: 36px;
    color: #fff;
    font-weight: bold;
  }

  span {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }
`;

export const AddNewPet = styled(Link)`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  max-width: 300px;
  max-height: 300px;
  width: 200px;
  height: 300px;
  transition: border 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background: #fff;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.6);
  }

  span {
    color: #333;
    font-size: 20px;
    margin-top: 30px;
  }

  svg {
    color: #3b9eff;
    margin-top: 60px;
  }
`;

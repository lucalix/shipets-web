import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
`;

export const AddNewPet = styled.button`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  max-width: 300px;
  max-height: 300px;
  width: 200px;
  height: 300px;
  transition: background 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.2);

    span {
      color: #fff;
      font-weight: bold;
    }

    svg {
      color: #fff;
    }
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

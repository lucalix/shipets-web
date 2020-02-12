import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  height: 500px;
  margin: 50px auto;
  background: #fff;
  padding: 30px;
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

export const ChooseSpecie = styled.div`
  flex: 1;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  div {
    height: 250px;
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 15px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    transition: background 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }

    span {
      margin-top: 40px;
      font-size: 16px;
      font-weight: bold;
      color: #666;
    }
  }
`;

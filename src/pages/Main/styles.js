import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? '1px solid #f00' : 'none')};
  }
  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b8;
    color: #fff;
    border: none;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    width: 80px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #52d89f;
    }
  }
`;

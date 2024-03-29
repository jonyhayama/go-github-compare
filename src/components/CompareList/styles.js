import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
`;

export const Actions = styled.div`
  position: absolute;
  top: 15px;
  right: 12.5px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #777;
    transition: all 0.3s ease-in-out;
    margin: 0 2.5px;
  }

  .close:hover {
    color: #f00;
  }

  .update:hover {
    color: #52d89f;
  }
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  position: relative;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }
    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;

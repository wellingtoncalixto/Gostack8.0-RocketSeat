import styled from 'styled-components';

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      height: 50px;
      width: 315px;
      margin: 15px auto;
      background: #22202c;
      border: 0;
      padding: 15px;
      border-radius: 5px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.2);
      }
    }

    button {
      width: 100%;
      height: 50px;
      background: #f94d6a;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font-family: Roboto;
      font-weight: bold;
    }

    a {
      color: rgba(255, 255, 255, 0.4);
      font-family: Roboto;
      margin-top: 10px;
    }
  }
`;

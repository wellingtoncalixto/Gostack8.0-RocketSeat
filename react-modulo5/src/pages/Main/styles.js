import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form.attrs(props => ({
  error: props.error,
}))`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? 'red' : 'black')};
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
  }
  ${props =>
    props.error &&
    css`
      div {
        display: flex;
        width: 100%;
        span {
          display: flex;
          justify-content: center;
          flex: 1;
          margin-top: 15px;
          background: red;
          color: #fff;
          padding: 6px 10px;
          border-radius: 5px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: lighter;
        }
      }
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  margin: 0;
  background: #000;
  border: 0;
  padding: 0 10px;
  margin-left: 10px;
  border-radius: 5px;

  svg {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  max-width: 700px;
  margin: auto;
  li {
    display: flex;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 15px;
    border-radius: 5px;
  }
  div {
    display: flex;
    align-items: center;

    button {
      display: flex;
      background: none;
      border: none;
      margin-right: 5px;
      align-items: center;
    }

    a {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 15px;
      font-weight: lighter;
    }
  }
  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    font-weight: bold;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

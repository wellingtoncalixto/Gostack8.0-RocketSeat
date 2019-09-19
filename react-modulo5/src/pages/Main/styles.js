import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
  }
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

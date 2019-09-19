import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div.attrs(props => ({
  loading: props.loading,
}))`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  ${props =>
    props.loading &&
    css`
      svg {
        margin-top: 10px;
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Owner = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 10px;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }

  h1 {
    margin-top: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    font-weight: bold;
  }

  p {
    margin-top: 5px;
    font-size: 15px;
    font-weight: lighter;
    max-width: 400px;
    color: #666;
  }

  a {
    display: flex;
    width: 100%;
    justify-content: flex-start;
  }

  svg {
    width: 25px;
    height: 25px;
    color: #000;
  }
`;

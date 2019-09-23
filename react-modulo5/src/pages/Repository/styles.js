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

export const IssueList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 30px;
  border-top: 1px solid #666;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    align-items: center;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    margin-top: 15px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #000;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 5px;
        font-size: 12px;
        margin-left: 10px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
      }
    }

    p {
      margin-top: 10px;
      font-size: 15px;
      font-weight: bold;
      color: #999;
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  button {
    margin: 5px;
    border: none;
    background: #000;
    color: white;
    padding: 5px;
    border-radius: 5px;
  }
`;

export const PageAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    margin: 0 15px;
    background: #000;
    color: white;
    padding: 5px;
    border-radius: 5px;
  }

  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    font-weight: bold;
  }
`;

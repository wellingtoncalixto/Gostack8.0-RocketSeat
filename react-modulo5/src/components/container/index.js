import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  margin: 80px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h1 {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  svg {
    margin-right: 10px;
  }
`;

export default Container;

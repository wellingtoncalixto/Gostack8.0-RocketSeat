import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 60px;
  display: flex;
  margin: 0 auto;
  max-width: 900px;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 25px;
      border-right: 1px solid #eee;
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      color: #999;
      font-size: 12px;
      margin-top: 2px;
      display: block;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;

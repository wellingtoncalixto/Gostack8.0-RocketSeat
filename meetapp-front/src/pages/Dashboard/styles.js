import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  max-width: 800px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  > div {
    display: flex;
    justify-content: space-between;

    > strong {
      font-size: 32px;
      color: #fff;
      font-family: Roboto;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  height: 42px;
  width: 25%;
  align-items: center;
  background: #f94d6a;
  border: none;
  border-radius: 5px;
  padding: 5px;

  > strong {
    margin-left: 10px;
    color: #fff;
  }
`;
export const MeetupList = styled.ul`
  margin-top: 15px;
`;

export const Meetup = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  background: rgba(0, 0, 0, 0.2);
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;

  strong {
    color: #fff;
  }

  aside {
    display: flex;
    align-items: center;

    span {
      color: rgba(255, 255, 255, 0.2);
    }
  }
`;

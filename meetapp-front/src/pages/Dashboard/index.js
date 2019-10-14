import React from 'react';
import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Button, MeetupList, Meetup } from './styles';
import history from '~/service/history';

export default function Dashboard() {
  function handleCreateMeetup() {
    history.push('/meetup/criar');
  }
  function handleDetalhes() {
    history.push('/detalhes');
  }
  return (
    <Container>
      <div>
        <strong>Meus Meetups</strong>
        <Button onClick={handleCreateMeetup}>
          <MdAddCircleOutline size={20} color="#fff" />
          <strong>Novo Meetup</strong>
        </Button>
      </div>
      <MeetupList>
        <Meetup onClick={handleDetalhes}>
          <strong>React Native</strong>
          <aside>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight size={24} color="#fff" />
          </aside>
        </Meetup>
        <Meetup>
          <strong>React Native</strong>
          <aside>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight size={24} color="#fff" />
          </aside>
        </Meetup>
        <Meetup>
          <strong>React Native</strong>
          <aside>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight size={24} color="#fff" />
          </aside>
        </Meetup>
        <Meetup>
          <strong>React Native</strong>
          <aside>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight size={24} color="#fff" />
          </aside>
        </Meetup>
      </MeetupList>
    </Container>
  );
}

import React, { useEffect, useState } from 'react';
import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import { Container, Button, MeetupList, Meetup } from './styles';
import api from '~/service/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          formattedDate: format(parseISO(meetup.date), "dd/MM/Y - HH'h'mm"),
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <div>
        <strong>Meus Meetups</strong>

        <Button to="/meetup/criar">
          <MdAddCircleOutline size={20} color="#fff" />
          <strong>Novo Meetup</strong>
        </Button>
      </div>
      <MeetupList>
        {meetups.map(meetup => (
          <Meetup
            to={`/detalhes/${meetup.id}`}
            key={meetup.id}
            past={meetup.past}
          >
            <strong>{meetup.title}</strong>
            <aside>
              <span>{meetup.formattedDate}</span>
              <MdKeyboardArrowRight size={24} color="#fff" />
            </aside>
          </Meetup>
        ))}
      </MeetupList>
    </Container>
  );
}

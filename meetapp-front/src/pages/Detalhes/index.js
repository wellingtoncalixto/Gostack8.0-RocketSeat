import React from 'react';
import {
  MdEdit,
  MdDelete,
  MdPermContactCalendar,
  MdLocationOn,
} from 'react-icons/md';
import {
  Container,
  Buttons,
  Title,
  EditButton,
  CancelButton,
  Footer,
  Date,
  Local,
} from './styles';

import banner from '~/assets/banner.svg';

export default function Detalhes() {
  return (
    <Container>
      <Title>
        <strong>Mettup React Native</strong>
        <Buttons>
          <EditButton>
            <MdEdit size={20} color="#fff" />
            <strong>Editar</strong>
          </EditButton>
          <CancelButton>
            <MdDelete size={20} color="#fff" />
            <strong>Cancel</strong>
          </CancelButton>
        </Buttons>
      </Title>
      <img src={banner} alt="" />
      <p>
        O Meetup de React native é um evento que reune a comunidade de
        desenvolvimento mobile utilizando React a fim de compartilhar
        conhecimento. todos são convidados
      </p>

      <Footer>
        <Date>
          <MdPermContactCalendar size={15} color="#fff" />
          <span>24 de Junho, às 20h </span>
        </Date>
        <Local>
          <MdLocationOn size={15} color="#fff" />
          <span>24 de Junho, às 20h </span>
        </Local>
      </Footer>
    </Container>
  );
}

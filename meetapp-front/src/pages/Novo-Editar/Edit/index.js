import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdEdit } from 'react-icons/md';
import { Container } from './styles';
import Banner from '../Banner/index';

export default function Editar() {
  return (
    <Container>
      <Form>
        <Banner />
        <Input name="titulo" placeholder="Titulo do Meetup" />
        <Textarea multiline name="descricao" placeholder="Descrição Completa" />
        <Input name="date" type="date" placeholder="Data do Meetup" />
        <Input name="localização" placeholder="Localização" />
        <button type="submit">
          <MdEdit size={15} color="#fff" /> Editar{' '}
        </button>
      </Form>
    </Container>
  );
}

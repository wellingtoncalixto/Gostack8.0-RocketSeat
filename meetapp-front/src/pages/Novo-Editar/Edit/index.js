import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdEdit } from 'react-icons/md';
import * as Yup from 'yup';
import { Container } from './styles';
import Banner from '../Banner/index';

const schema = Yup.object().shape({
  titulo: Yup.string().required('O titulo é obrigatorio'),
  descricao: Yup.string().required('A descrição é obrigatoria'),
  date: Yup.string().required('A data é obrigatoria'),
  localizacao: Yup.string().required('a localização é obrigatoria'),
});
export default function Editar() {
  return (
    <Container>
      <Form schema={schema}>
        <Banner />
        <Input name="titulo" placeholder="Titulo do Meetup" />
        <Textarea multiline name="descricao" placeholder="Descrição Completa" />
        <Input name="date" type="date" placeholder="Data do Meetup" />
        <Input name="localizacao" placeholder="Localização" />
        <button type="submit">
          <MdEdit size={15} color="#fff" /> Editar{' '}
        </button>
      </Form>
    </Container>
  );
}

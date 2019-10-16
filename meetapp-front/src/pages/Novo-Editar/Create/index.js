import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { Container } from './styles';
import Banner from '../Banner/index';
import DatePicker from '~/components/DatePicker';

const schema = Yup.object().shape({
  titulo: Yup.string().required('O titulo é obrigatorio'),
  descricao: Yup.string().required('A descrição é obrigatoria'),
  date: Yup.string().required('A data é obrigatoria'),
  localizacao: Yup.string().required('a localização é obrigatoria'),
});
export default function Create() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Banner />
        <Input name="titulo" placeholder="Titulo do Meetup" />
        <Textarea multiline name="descricao" placeholder="Descrição Completa" />
        <DatePicker name="date" type="date" placeholder="Data do Meetup" />
        <Input name="localizacao" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline size={15} color="#fff" /> Adicionar{' '}
        </button>
      </Form>
    </Container>
  );
}

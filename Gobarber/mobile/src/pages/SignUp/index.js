import React from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitiButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="digite seu nome completo"
        />
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="digite seu e-mail"
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua Senha"
        />
        <SubmitiButton onPress={() => {}}>Cadastrar</SubmitiButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já tenho uma conta</SignLinkText>
      </SignLink>
    </Container>
  );
}

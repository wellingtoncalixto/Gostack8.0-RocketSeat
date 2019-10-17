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

export default function SignIn({navigation}) {
  return (
    <Container>
      <Image source={logo} />

      <Form>
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
        <SubmitiButton onPress={() => {}}>Acessar</SubmitiButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  );
}

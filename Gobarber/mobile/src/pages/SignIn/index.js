import React, {useRef} from 'react';
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
  const passwordRef = useRef();

  function handleSubmit() {}

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
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <SubmitiButton onPress={() => {}}>Acessar</SubmitiButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  );
}

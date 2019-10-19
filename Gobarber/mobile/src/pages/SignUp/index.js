import React, {useRef, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

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
import {signUpRequest} from '~/store/modules/auth/actions';

export default function SignUp({navigation}) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="digite seu nome completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="digite seu e-mail"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <SubmitiButton onPress={handleSubmit}>Cadastrar</SubmitiButton>
      </Form>
      <SignLink loading={loading} onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já tenho uma conta</SignLinkText>
      </SignLink>
    </Container>
  );
}

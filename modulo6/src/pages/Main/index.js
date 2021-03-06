import React, {Component} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconTrash from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';
import {
  Form,
  Input,
  Buttons,
  SubmitButton,
  List,
  DeleteButton,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';
import Container from '../../components/Container';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Usuarios',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    users: [],
    press: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({users: JSON.parse(users)});
    }
  }

  async componentDidUpdate(_, preState) {
    const {users} = this.state;
    if (preState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleSubmit = async () => {
    const {newUser, users} = this.state;

    this.setState({press: true});

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };
    await this.setState({
      users: [...users, data],
      newUser: '',
      press: false,
    });

    Keyboard.dismiss();
  };

  handleDelete = user => {
    const {users} = this.state;
    this.setState({
      users: users.filter(r => r !== user),
    });
  };

  handleNavigate = user => {
    const {navigation} = this.props;

    navigation.navigate('User', {user});
  };

  render() {
    const {users, newUser, press} = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="User Github"
            value={newUser}
            onChangeText={text => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleSubmit}
          />
          <SubmitButton press={press} onPress={this.handleSubmit}>
            {press ? (
              <ActivityIndicator color="#333" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User>
              <Avatar source={{uri: item.avatar}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <Buttons>
                <ProfileButton onPress={() => this.handleNavigate(item)}>
                  <ProfileButtonText>Ver Perfil</ProfileButtonText>
                </ProfileButton>
                <DeleteButton
                  type="button"
                  key={item.name}
                  onPress={() => this.handleDelete(item)}>
                  <IconTrash name="trash-can" size={20} color="#fff" />
                </DeleteButton>
              </Buttons>
            </User>
          )}
        />
      </Container>
    );
  }
}

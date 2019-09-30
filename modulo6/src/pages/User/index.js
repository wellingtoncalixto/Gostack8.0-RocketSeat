import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Loading,
  LoadingText,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Author,
  Title,
} from './styles';
import Container from '../../components/Container';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loader: false,
    page: 1,
    refreshing: false,
  };

  async componentDidMount() {
    this.setState({loader: true});
    this.load();
  }

  load = async (page = 1) => {
    const {navigation} = this.props;
    const {stars} = this.state;
    const user = navigation.getParam('user');
    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page,
      },
    });

    this.setState({
      stars: page >= 2 ? [...stars, ...response.data] : response.data,
      page,
      loader: false,
      refreshing: false,
    });
  };

  loadMore = () => {
    const {page} = this.state;

    const nextPage = page + 1;

    this.load(nextPage);
  };

  refreshList = () => {
    this.setState({refreshing: true, stars: []}, this.load);
  };

  handleNavigate = repository => {
    const {navigation} = this.props;

    navigation.navigate('Repository', {repository});
  };

  render() {
    const {navigation} = this.props;
    const {stars, loader, refreshing} = this.state;
    const user = navigation.getParam('user');
    return (
      <>
        {loader ? (
          <Loading>
            <ActivityIndicator size={30} color="#fff" />
            <LoadingText>Carregando</LoadingText>
          </Loading>
        ) : (
          <Container>
            <Header>
              <Avatar source={{uri: user.avatar}} />
              <Name>{user.name}</Name>
              <Bio>{user.bio}</Bio>
            </Header>
            <Stars
              data={stars}
              onRefresh={this.refreshList}
              refreshing={refreshing}
              keyExtractor={star => String(star.id)}
              onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
              onEndReached={this.loadMore}
              renderItem={({item}) => (
                <Starred onPress={() => this.handleNavigate(item)}>
                  <OwnerAvatar source={{uri: item.owner.avatar_url}} />
                  <Info>
                    <Author>{item.owner.login}</Author>
                    <Title>{item.name}</Title>
                  </Info>
                </Starred>
              )}
            />
          </Container>
        )}
      </>
    );
  }
}

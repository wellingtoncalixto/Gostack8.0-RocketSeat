import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Browser, Loading, LoadingText} from './styles';

export default class Repository extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('repository').name,
  });

  state = {
    loading: false,
    repository: {},
  };

  async componentDidMount() {
    this.setState({loading: true});
    this.loader();
  }

  loader = async () => {
    const {navigation} = this.props;
    const response = await navigation.getParam('repository');
    this.setState({
      repository: response,
      loading: false,
    });
  };

  render() {
    const {repository, loading} = this.state;
    return (
      <>
        {loading ? (
          <Loading>
            <ActivityIndicator size={30} color="#fff" />
            <LoadingText>Carregando</LoadingText>
          </Loading>
        ) : (
          <Browser source={{uri: repository.html_url}} />
        )}
      </>
    );
  }
}

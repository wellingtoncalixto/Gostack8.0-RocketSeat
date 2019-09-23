import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/container/index';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleSubmitChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: false });
    try {
      const { newRepo, repositories } = this.state;

      if (newRepo === '') throw new Error('missing text');

      const hasRepo = repositories.find(repo => repo.name === newRepo);

      if (hasRepo) throw new Error('found local data');

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        error: '',
      });
    } catch (err) {
      let error = '';
      switch (err.toString()) {
        case 'Error: missing text':
          error = 'Você precisa indicar um repositório';
          break;
        case 'Error: found local data':
          error = 'Você já possui esse repositorio';
          break;
        default:
          error = err.toString();
      }

      if (typeof error === typeof '') {
        this.setState({ error });
      } else {
        this.setState({ error: error.toString() });
        // this.setState({ error: 'Parece que esse repositório não existe' });
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDelete = repository => {
    const { repositories } = this.state;
    this.setState({
      repositories: repositories.filter(r => r !== repository),
    });
  };

  render() {
    const { newRepo, repositories, loading, error } = this.state;

    return (
      <>
        <Container>
          <h1>
            <FaGithubAlt />
            Repositorios
          </h1>
          <Form onSubmit={this.handleSubmit} error={error}>
            <input
              type="text"
              placeholder="nome do repositorio"
              value={newRepo}
              onChange={this.handleSubmitChange}
            />
            <SubmitButton loading={loading}>
              {loading ? (
                <FaSpinner color="#FFF" size={14} />
              ) : (
                <FaPlus color="#FFF" size={14} />
              )}
            </SubmitButton>
            <div> {error && <span>{error}</span>}</div>
          </Form>
        </Container>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <div>
                <button
                  type="button"
                  key={repository.name}
                  onClick={() => this.handleDelete(repository)}
                >
                  <FaTrash size={18} />
                </button>
                <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                  Detalhes
                </Link>
              </div>
            </li>
          ))}
        </List>
      </>
    );
  }
}

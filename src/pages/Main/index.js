import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  componentWillMount() {
    try {
      const storedRepositories = JSON.parse(localStorage.getItem('@github-compare/repositories'));
      if (storedRepositories) {
        this.setState({
          repositories: storedRepositories,
        });
      }
    } catch {
      // problems with JSON.parse, nothing to do, just start fresh...
    }
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const { repositoryInput, repositories } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      const newRepositories = [...repositories, repository];
      localStorage.setItem('@github-compare/repositories', JSON.stringify(newRepositories));

      this.setState({
        repositoryInput: '',
        repositories: newRepositories,
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleRemoveRepository = repositoryInput => () => {
    const { repositories } = this.state;
    const newRepositories = repositories.filter(rep => rep.id !== repositoryInput);

    localStorage.setItem('@github-compare/repositories', JSON.stringify(newRepositories));
    this.setState({
      repositories: newRepositories,
    });
  };

  handleUpdateRepository = repositoryInput => async () => {
    const { repositories } = this.state;
    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repositoryInput.pushed_at).fromNow();

      // eslint-disable-next-line max-len
      const newRepositories = repositories.map(rep => (rep.full_name !== repositoryInput ? rep : repository));

      localStorage.setItem('@github-compare/repositories', JSON.stringify(newRepositories));
      this.setState({
        repositories: newRepositories,
      });
    } catch (err) {
      // TODO: this.setState({ repositoryError: true });
    } finally {
      // TODO: this.setState({ loading: false });
    }
  };

  render() {
    const {
      repositories, repositoryInput, repositoryError, loading,
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'ADD'}
          </button>
        </Form>

        <CompareList
          repositories={repositories}
          handleRemoveRepository={this.handleRemoveRepository}
          handleUpdateRepository={this.handleUpdateRepository}
        />
      </Container>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository, Actions } from './styles';

const CompareList = ({ repositories, handleRemoveRepository, handleUpdateRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <Actions>
          <button
            type="button"
            className="update"
            onClick={handleUpdateRepository(repository.full_name)}
          >
            <i className="fa fa-refresh" />
          </button>
          <button type="button" className="close" onClick={handleRemoveRepository(repository.id)}>
            <i className="fa fa-trash-o" />
          </button>
        </Actions>

        <header>
          <img src={repository.owner.avatar_url} alt="Facebook" />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count}
            {' '}
            <small>stars</small>
          </li>
          <li>
            {repository.forks_count}
            {' '}
            <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count}
            {' '}
            <small>issues</small>
          </li>
          <li>
            {repository.lastCommit}
            {' '}
            <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
  handleRemoveRepository: PropTypes.func.isRequired,
  handleUpdateRepository: PropTypes.func.isRequired,
};

export default CompareList;

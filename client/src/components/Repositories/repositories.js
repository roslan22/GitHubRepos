import React from 'react';
import './repositories.css';
import '../../styles/button.css'
import RepoTable from './repoTable'
import RepoSearch from './repoSearch';

const Repositores = () => {
  return (
    <React.Fragment>
      <RepoSearch />
      <RepoTable />
    </React.Fragment>
  )
}

export default Repositores;


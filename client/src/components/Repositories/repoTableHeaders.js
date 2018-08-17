import React from 'react';
import './repositories.css';

const RepoTableHeaders = () => (
  <div className="repo-container">
    <div className="repo-line-empty-left" />
    <div className="repo-line-forks repo-header">#Forks</div>
    <div className="repo-line-fullname repo-header">Name</div>
    <div className="repo-line-bookmark repo-header">Status</div>
    <div className="repo-line-url repo-header">Navigation</div>
    <div className="repo-line-empty-right" />
  </div>
);

export default RepoTableHeaders;

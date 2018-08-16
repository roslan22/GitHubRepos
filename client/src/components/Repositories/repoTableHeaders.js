import React from 'react';
import './repositories.css';

const RepoTableHeaders = () => {
    return (
        <div className="repo-container">
            <div className="repo-line-empty-left"></div>
            <div className="repo-line-forks">#Forks</div>
            <div className="repo-line-fullname">Name</div>
            <div className="repo-line-bookmark"></div>
            <div className="repo-line-url"></div>
            <div className="repo-line-empty-right"></div>
        </div>
    );
}

export default RepoTableHeaders;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import '../Repositories/repositories.css';
import RepoLine from '../Repositories/repoLine'

class Bookmarks extends PureComponent {
  static propTypes = {
    listOfRepos: PropTypes.array.isRequired,
  }

  static defaultProps = {
    listOfRepos: [],
  }

  render() {
    return (
      <div>
        <h2>Bookmarks</h2>
        <div className="repo-list" style={{ display: this.props.listOfRepos.length === 0 ? 'none' : 'block' }}>
          <div className="repo-container">
            <div className="repo-line-forks">#Forks</div>
            <div className="repo-line-fullname">Name</div>
            <div className="repo-line-bookmark"></div>
            <div className="repo-line-url"></div>
          </div>
          {this.props.listOfRepos.map(repo =>
            <RepoLine repo={repo} key={repo.id} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfRepos: state.repositories.listOfRepos,
})

export default connect(mapStateToProps)(Bookmarks)


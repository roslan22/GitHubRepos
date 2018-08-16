import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import './repositories.css';
import '../../styles/button.css'
import RepoLine from './repoLine'
import RepoTableHeaders from './repoTableHeaders'

class RepoTable extends PureComponent {
  static propTypes = {
    listOfRepos: PropTypes.array.isRequired,
  }

  static defaultProps = {
    listOfRepos: [],
  }

  render() {
    return (
      <div>
        <div className="repo-list" style={{ display: this.props.listOfRepos.length === 0 ? 'none' : 'block' }}>
          <RepoTableHeaders/>
          {this.props.listOfRepos.map(repo =>
            <RepoLine repo={repo} key={repo.id}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfRepos: state.repositories.listOfRepos,
})

export default connect(mapStateToProps)(RepoTable)


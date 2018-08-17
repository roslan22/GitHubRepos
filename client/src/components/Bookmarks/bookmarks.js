import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import '../Repositories/repositories.css';
import RepoLine from '../Repositories/repoLine'
import RepoTableHeaders from '../Repositories/repoTableHeaders'
import { DATA_TYPE } from '../../store/constants'

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
        <div className="repo-list" style={{ display: this.props.listOfRepos.length === 0 ? 'none' : 'block' }}>
          <RepoTableHeaders/>
          {this.props.listOfRepos.map(repo =>
            <RepoLine repo={repo} key={repo.id} type={ DATA_TYPE.bookmarks }/>
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


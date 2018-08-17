import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import '../Repositories/repositories.css';
import RepoLine from '../Repositories/repoLine'
import RepoTableHeaders from '../Repositories/repoTableHeaders'
import { DATA_TYPE } from '../../store/constants'
import { getBookmarkedRepos } from '../../store/actions/repositories';

class Bookmarks extends PureComponent {
  static propTypes = {
    bookmarkedRepos: PropTypes.array.isRequired,
  }

  static defaultProps = {
    bookmarkedRepos: []
  }

  static propTypes = {
    getBookmarkedRepos: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getBookmarkedRepos();
  }

  render() {
    let bookmarkedLength = this.props.bookmarkedRepos.length;
    return (
      <div>
        <RepoTableHeaders />
        {bookmarkedLength === 0 && <div>No bookmarks found, please add them first</div>}
        {this.props.bookmarkedRepos.map(
          repo => <RepoLine repo={repo} key={repo.id} type={DATA_TYPE.bookmarks} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookmarkedRepos: state.repositories.bookmarkedRepos,
})

const dispatchToProps = (dispatch) => ({
  getBookmarkedRepos: () => dispatch(getBookmarkedRepos()),
})

export default connect(mapStateToProps, dispatchToProps)(Bookmarks)


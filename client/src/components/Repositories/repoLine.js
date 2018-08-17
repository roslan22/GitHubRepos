import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBookmark, deleteBookmark } from '../../store/actions/repositories';
import './repositories.css';
import '../../styles/button.css';
import { DATA_TYPE } from '../../store/constants';


class RepoLine extends PureComponent {
  static propTypes = {
    addBookmark: PropTypes.func.isRequired,
    deleteBookmark: PropTypes.func.isRequired,
    repo: PropTypes.object,
    bookmarks: PropTypes.array.isRequired,
  }

  static defaultProps = {
    repo: {},
    bookmarks: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      repo: props.repo,
      type: props.type,
    };
  }


  handleAddBookmark = (event) => {
    this.props.addBookmark(event.target.value);
  }

  handleDeleteBookmark = (event) => {
    this.props.deleteBookmark(event.target.value);
  }

  renderAddBookmarkButton = isRepoBookmarked => (!isRepoBookmarked
    ? (
      <button onClick={this.handleAddBookmark}
        value={this.state.repo.id}
        className="general-button">Bookmark</button>
    )
    : <button className="general-button-disabled" disabled>Bookmarked</button>)

  renderAddBookmark = () => {
    const isRepoBookmarked = this.props.bookmarks.includes(this.state.repo.id.toString());

    return (!isRepoBookmarked
      ? (<button onClick={this.handleAddBookmark} value={this.state.repo.id}
        className="general-button">Bookmark</button>)
      : <button disabled>Bookmarked</button>);
  }

  renderDeleteBookmark = () => (
    <button onClick={this.handleDeleteBookmark}
      value={this.state.repo.id} className="general-button"> Delete</button>
  )

  render() {
    return (
      <div className="repo-container" key={this.state.repo.id}>
        <div className="repo-line-empty-left" />
        <div className="repo-line-forks">
          {this.state.repo.forks}
        </div>
        <div className="repo-line-fullname">
          {this.state.repo.full_name}
        </div>
        <div className="repo-line-bookmark">
          {this.state.type === DATA_TYPE.repos && this.renderAddBookmark()}
          {this.state.type === DATA_TYPE.bookmarks && this.renderDeleteBookmark()}
        </div>
        <div className="repo-line-url">
          <a href={this.state.repo.html_url} className="general-button">Go to Repo</a>
        </div>
        <div className="repo-line-empty-right" />
      </div>
    );
  }
}

const dispatchToProps = dispatch => ({
  addBookmark: repoId => dispatch(addBookmark(repoId)),
  deleteBookmark: repoId => dispatch(deleteBookmark(repoId)),
});

const mapStateToProps = state => ({
  bookmarks: state.repositories.bookmarks,
});

export default connect(mapStateToProps, dispatchToProps)(RepoLine);

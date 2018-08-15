import React, { Component  } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getRepositories, addBookmark } from '../../store/actions/repositories';
import './repositories.css';
import '../../styles/button.css'

class Repositores extends Component  {
  constructor(){
    super();
    this.state = { searchValue: "", 
                   bookmarkedRepos : [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
  }

  static propTypes = {
    getRepositories: PropTypes.func.isRequired,
    addBookmark : PropTypes.func.isRequired,
    listOfRepos: PropTypes.array.isRequired,
    bookmarks: PropTypes.array.isRequired
  }

  static defaultProps = {
    listOfRepos: [],
    bookmarks: []
  }

  componentWillMount() {
    this.props.getRepositories('react');
  }

  handleSubmit(event){
    this.props.getRepositories(this.state.searchValue);
    event.preventDefault();
  }

  handleChange(event){
    this.setState({searchValue: event.target.value});
  }

  handleAddBookmark(event)
  {
    this.props.addBookmark(event.target.value);
    event.preventDefault();
  } 
  

  render() {
    let bookmarkedLines = this.props.bookmarks.map(repoId => repoId);

    let renderLines = () => {
     return (this.props.listOfRepos.map(repo =>
        <div class="repo-container" key={repo.id}>
          <div class="repo-line-forks">
            {repo.forks} 
          </div>
          <div class="repo-line-fullname">
            {repo.full_name} 
          </div>
          <div class="repo-line-bookmark">
            {!bookmarkedLines.includes(repo.id.toString()) && <button onClick={this.handleAddBookmark} value={repo.id} class="general-button">Bookmark</button>}
            {bookmarkedLines.includes(repo.id.toString()) && <button class="general-button-disabled" disabled>Bookmarked</button>}
          </div>
          <div class="repo-line-url">
            <a href={repo.html_url} class="general-button">Go to Repo</a>
          </div>
      </div>
      ))};
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Enter Git repo name" value={this.state.searchValue} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
        </form>
        <h2>Repositories</h2>
          <div class="repo-list" style={{display: this.props.listOfRepos.length === 0 ? 'none' : 'block'}}>
            <div class="repo-container">
              <div class="repo-line-forks">#Forks</div>
              <div class="repo-line-fullname">Name</div>
              <div class="repo-line-bookmark"></div>
              <div class="repo-line-url"></div>
            </div>
            {renderLines()}
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfRepos: state.repositories.listOfRepos,
  bookmarks : state.repositories.bookmarks
})

const dispatchToProps = (dispatch) => ({
  getRepositories: (searchItem) => dispatch(getRepositories(searchItem)),
  addBookmark : (repoId) => dispatch(addBookmark(repoId))
})

// Repositores = connect(
//   (state, props) => {
//       return {
//         [props.listOfRepos]: state.repositories.listOfRepos,
//       };
//   },
//   {
//     getRepositories
//   }
// )(Repositores);

export default connect(mapStateToProps, dispatchToProps)(Repositores)


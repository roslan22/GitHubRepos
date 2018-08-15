import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getRepositories } from '../../store/actions/repositories';
import './repositories.css';

class Repositores extends PureComponent {
  constructor(){
    super();
    this.state = { searchValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    getRepositories: PropTypes.func.isRequired,
    listOfRepos: PropTypes.array.isRequired
  }

  static defaultProps = {
    listOfRepos: [],
  }

  componentWillMount() {
    //TODO: get all bookmarks
  }

  handleSubmit(event){
    this.props.getRepositories(this.state.searchValue);
    event.preventDefault();
  }

  handleChange(event){
    this.setState({searchValue: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Enter Git repo name" value={this.state.searchValue} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
        </form>
        <h2>Repositories</h2>
        <ul>
          {this.props.repositories.listOfRepos.map(repo =>
            <li key={repo.id}>{repo.forks} {repo.full_name} {repo.html_url}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  repositories: state.repositories
})

const dispatchToProps = (dispatch) => ({
  getRepositories: () => dispatch(getRepositories(this.state.searchValue))
})

export default connect(mapStateToProps, dispatchToProps)(Repositores);

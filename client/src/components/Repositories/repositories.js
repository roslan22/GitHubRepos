import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getRepositories } from '../../store/actions/repositories';
import './repositories.css';

class Repositores extends Component {

  static propTypes = {
    getRepositories: PropTypes.func.isRequired,
    listOfRepos: PropTypes.array.isRequired
  }

  static defaultProps = {
    listOfRepos: [],
    searchValue: 'Please enter git repo'
  }

  componentWillMount() {
    this.props.getRepositories();
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Enter Git repo name" value={this.props.searchValue}/>
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
  getRepositories: () => dispatch(getRepositories('CompanyRide'))
})

export default connect(mapStateToProps, dispatchToProps)(Repositores);

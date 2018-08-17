import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepositories } from '../../store/actions/repositories';
import './repositories.css';
import '../../styles/button.css';

class RepoSearch extends PureComponent {
  static propTypes = {
    getRepositories: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = { searchValue: '' };
  }

  componentWillMount() {
    this.props.getRepositories('react');
  }

  handleSubmit = (event) => {
    this.props.getRepositories(this.state.searchValue);
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter Git repo name"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

const dispatchToProps = dispatch => ({
  getRepositories: searchItem => dispatch(getRepositories(searchItem)),
});

export default connect(null, dispatchToProps)(RepoSearch);

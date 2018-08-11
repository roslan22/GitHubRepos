import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getRepositories} from '../../store/actions/customer'
import './customers.css';

class Customers extends Component {

  static propTypes = {
    getRepositories: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
    repositories: PropTypes.array.isRequired
  }

  static defaultProps = {
    customers: []
  }

  componentWillMount() {
    this.props.getRepositories();
  }

  render() {

    return (
      <div>
        <h2>Repositories</h2>
        <ul>
        {this.props.customers.map(repo =>
          <li key={repo.id}>{repo.forks} {repo.full_name} {repo.html_url}</li>
        )}
        </ul>
      </div>      
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers,
  repositories: state.repositories
})

const dispatchToProps = (dispatch) => ({
   getRepositories: () => dispatch(getRepositories('CompanyRide'))
})

export default connect(mapStateToProps, dispatchToProps)(Customers);

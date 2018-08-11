import {GET_REPOSITORIES} from './constants';

export const getRepositories = (searchItem) => dispatch => {
  return fetch(`/api/search/${searchItem}`)
    .then(res => res.json())
    .then(repos => dispatch({type: GET_REPOSITORIES, payload: repos}))
}

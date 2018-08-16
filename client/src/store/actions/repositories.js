import {GET_REPOSITORIES, ADD_BOOKMARK} from './constants';
import axios from 'axios';

export const getRepositories = (searchItem) => dispatch => {
  return fetch(`/api/search/${searchItem}`)
    .then(res => res.json())
    .then(repos => dispatch({type: GET_REPOSITORIES, payload: repos}))
}

export const addBookmark = (repoId) => dispatch => {
  return axios({
    method:'post',
    url:`/api/bookmarks/${repoId}`,
  })
    .then(function(response) {
      dispatch({type: ADD_BOOKMARK, payload : 
        { status: response.status, 
          bookmarkedRepoId :response.data.bookmarkedRepoId}})});
}


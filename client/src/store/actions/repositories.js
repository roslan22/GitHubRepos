import { ACTION_NAME, URLS } from '../constants';
import axios from 'axios';

export const getRepositories = (searchItem) => dispatch => {
  return fetch(URLS.apiSearch + searchItem)
    .then(res => res.json())
    .then(repos => dispatch({type: ACTION_NAME.getRepositories, payload: repos}))
}

export const addBookmark = (repoId) => dispatch => {
  return axios({
    method:'post',
    url: URLS.bookmarks + repoId,
  })
    .then(function(response) {
      dispatch({type: ACTION_NAME.addBookmark, payload : 
        { status: response.status, 
          bookmarkedRepoId :response.data.bookmarkedRepoId}})});
}


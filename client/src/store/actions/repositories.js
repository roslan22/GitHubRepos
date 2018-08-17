import { ACTION_NAME, URLS } from '../constants';
import axios from 'axios';

export const getRepositories = (searchItem) => dispatch => {
  return fetch(URLS.apiSearch + searchItem)
    .then(res => res.json())
    .then(repos => dispatch({ type: ACTION_NAME.getRepositories, payload: repos }))
}

export const addBookmark = (repoId) => dispatch => {
  return axios({
    method: 'post',
    url: URLS.bookmarks + repoId,
  })
    .then(function (response) {
      dispatch({
        type: ACTION_NAME.addBookmark, payload:
        {
          status: response.status,
          bookmarkedRepoId: response.data.bookmarkedRepoId
        }
      })
    });
}

export const deleteBookmark = (repoId) => dispatch => {
  return axios({
    method: 'delete',
    url: URLS.bookmarks + repoId,
  })
    .then(function (response) {
      dispatch({
        type: ACTION_NAME.deleteBookmark, payload:
        {
          status: response.status,
          bookmarkedRepos: response.data
        }
      })
    });
}

export const getBookmarkedRepos = () => dispatch => {
  return axios({
    method: 'get',
    url: URLS.bookmarks,
  })
    .then(function (response) {
      dispatch({
        type: ACTION_NAME.getBookmarkedRepos,
        payload: {
          status: response.status,
          bookmarkedRepos: response.data
        }
      })
    });
}



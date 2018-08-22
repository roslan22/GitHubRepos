import { ACTION_NAME, URLS } from '../constants';
import axios from 'axios';

export const getRepositories = (searchItem) => dispatch => {
  return axios({
    method: 'get',
    url: URLS.apiSearch + searchItem,
  })
    .then((response) => {
      dispatch({ type: ACTION_NAME.getRepositories, payload: response.data })
    })
    .catch((err) => {
      console.log('error in getting repos' + err)
    })
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



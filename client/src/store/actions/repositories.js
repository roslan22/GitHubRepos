import axios from 'axios';
import { ACTION_NAME, URLS } from '../constants';

export const getRepositories = searchItem => dispatch => axios({
  method: 'get',
  url: URLS.apiSearch + searchItem,
})
  .then((response) => {
    dispatch({ type: ACTION_NAME.getRepositories, payload: response.data });
  })
  .catch((err) => {
    console.log(`error in getting repos${err}`);
  });

export const addBookmark = repoId => dispatch => axios({
  method: 'post',
  url: URLS.bookmarks + repoId,
})
  .then((response) => {
    dispatch({
      type: ACTION_NAME.addBookmark,
      payload:
        {
          status: response.status,
          bookmarkedRepoId: response.data.bookmarkedRepoId,
        },
    });
  });

export const deleteBookmark = repoId => dispatch => axios({
  method: 'delete',
  url: URLS.bookmarks + repoId,
})
  .then((response) => {
    dispatch({
      type: ACTION_NAME.deleteBookmark,
      payload:
        {
          status: response.status,
          bookmarkedRepos: response.data,
        },
    });
  });

export const getBookmarkedRepos = () => dispatch => axios({
  method: 'get',
  url: URLS.bookmarks,
})
  .then((response) => {
    dispatch({
      type: ACTION_NAME.getBookmarkedRepos,
      payload: {
        status: response.status,
        bookmarkedRepos: response.data,
      },
    });
  });

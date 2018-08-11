'use strict';
const axios = require('axios');

const path = 'https://api.github.com/search/'

const get_repositories = function (searchItem) {
   console.log("api call get_repositories for: " + searchItem)
   return axios.get(path + `repositories?q=${searchItem}&sort=stars&order=desc`);
}

module.exports = {
    get_repos: get_repositories
}
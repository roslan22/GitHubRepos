'use strict';
const axios = require('axios');
const {consts} = require('../consts/consts')

const get_repositories = function (searchItem) {
   console.log("api call get_repositories for: " + searchItem)
   return axios.get(consts.gitHubAPISearchPath + `repositories?q=${searchItem}&sort=stars&order=desc`);
}

module.exports = {
   get_repositories
}
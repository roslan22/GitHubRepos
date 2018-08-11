'use strict';
const gitHubHttpService = require('../services/gitHubHttpService');
const { RepoModel } = require('../models/RepoModel')
const _ = require('lodash');

exports.list_of_repos_async = async (req, res, next) => {    
    let result = {};

    try {
        result = await gitHubHttpService.get_repos(req.params.searchItem);
    }
    catch(err) {
        next(err);
    }

    const items = result.data.items.map(item => {
        // picking only relevant properties from object
        return _.pick(item, Object.keys(RepoModel))
    });

    res.json(items);
};

exports.bookmark_repository_async = async (req, res) => {
    const result = await gitHubHttpService.get_repos(req.params.searchItem)
    res.json(result.data.url);
};

exports.get_bookmarked_repositories = async (req, res) => {
    const result = await gitHubHttpService.get_repos(req.params.searchItem)
    res.json(result.data.url);
};

'use strict';
const gitHubService = require('../services/gitHubService');
const { repoModel } = require('../models/repoModel')
const repositoriesService = require('../services/repositoriesService')

const _ = require('lodash');

const getListOfReposAsync = async (req, res, next) => {
    let result = {};

    try {
        result = await gitHubService.get_repositories(req.params.searchItem);
    }
    catch (err) {
        next(err);
    }

    const items = result.data.items.map(item => {
        // picking only relevant properties from object
        return _.pick(item, Object.keys(repoModel))
    });

    repositoriesService.updateCurrentRepositories(items);

    res.json(items);
};

const bookmarkRepository = (req, res) => {
    const repoId = req.params.repoId;

    try {
        repositoriesService.bookmarkRepository(repoId)
        res.bookmarkedRepoId = repoId;
        res.status(201).send({ bookmarkedRepoId: repoId });
    }
    catch (err) {
        console.log(`error in saving bookmark for id ${repoId}`);
        res.status(404).send({ bookmarkedRepoId: repoId });
    }
};

const getBookmarkedRepositories = (req, res) => {
    const bookmarkedRepos = repositoriesService.getBookmarkedRepositories();
    res.json(bookmarkedRepos);
};

module.exports = {
    getListOfReposAsync,
    bookmarkRepository,
    getBookmarkedRepositories
}
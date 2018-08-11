'use strict';
const {RepoModel} = require('../models/RepoModel');

let currentRepositories = new Map();
let bookmarkedReposById = new Map();

 const updateCurrentRepositories = (repos) => {
    console.log("updating current repos: " + repos)
    repos.forEach(repo => {
        currentRepositories.set(repo.id, repo);
    });
 }

 const bookmarkRepository = (repoId) => {
    console.log("bookmarking repo: " + repoId);
    let repo = currentRepositories.get(parseInt(repoId));
    if(!repo)
    {
        // no key was found
       throw new Error(`Repository with ${repoId} was not found`);
    }
    
    bookmarkedReposById.set(repo.id, repo);
 }

 const getBookmarkedRepositories = () => {
    console.log("getting all bookmarked repos");
    return [...bookmarkedReposById.values()];
 }
 

 module.exports = {
    bookmarkRepository: bookmarkRepository,
    updateCurrentRepositories : updateCurrentRepositories,
    getBookmarkedRepositories : getBookmarkedRepositories
}
'use strict';
let currentRepositories = new Map();
let bookmarkedReposById = new Map();

 const updateCurrentRepositories = (repos) => {
    console.log("updating current repos")
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

 const deleteRepository = (repoId) => {
    console.log("deleting repo: " + repoId);
    let repo = bookmarkedReposById.get(parseInt(repoId));
    if(!repo)
    {
        // no key was found
       throw new Error(`Repository with ${repoId} was not found`);
    }

    bookmarkedReposById.delete(parseInt(repoId));
 }

 const getBookmarkedRepositories = () => {
    console.log("getting all bookmarked repos");
    return [...bookmarkedReposById.values()];
 }
 

 module.exports = {
    bookmarkRepository,
    updateCurrentRepositories,
    getBookmarkedRepositories,
    deleteRepository
}
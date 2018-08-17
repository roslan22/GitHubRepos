'use strict';
module.exports = function (app) {
    const gitHub = require('../controllers/gitHubController');

    app.route('/api/search/:searchItem')
        .get(gitHub.getListOfReposAsync);

    app.route('/api/bookmarks/:repoId')
        .post(gitHub.bookmarkRepository)
        .delete(gitHub.deleteRepository);        

    app.route('/api/bookmarks')
        .get(gitHub.getBookmarkedRepositories);
};
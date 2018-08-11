'use strict';
module.exports = function (app) {
    var gitHub = require('../controllers/gitHubController');

    app.route('/api/search/:searchItem')
        .get(gitHub.getListOfReposAsync);

    app.route('/api/bookmarks/:repoId')
        .post(gitHub.bookmarkRepository);        

    app.route('/api/bookmarks')
        .get(gitHub.getBookmarkedRepositories);

};
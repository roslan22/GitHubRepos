'use strict';
module.exports = function (app) {
    var gitHub = require('../controllers/gitHubController');

    app.route('/api/search/:searchItem')
        .get(gitHub.getListOfReposAsync)

    app.route('/api/bookmarks/:repoId')
        .post(gitHub.bookmarkRepository)        

    app.route('/api/bookmarks')
        .get(gitHub.getBookmarkedRepositories)  

    app.get('/api/customers', (req, res) => {
        const customers = [
            { id: 1, firstName: 'John', lastName: 'Doe' },
            { id: 2, firstName: 'Brad', lastName: 'Traversy' },
            { id: 3, firstName: 'Mary', lastName: 'Swanson' },
        ];

        res.json(customers);
    });

};
# GitHubRepos Project

> This project create full stack app with React/Redux and Express. 
Run your client and server with a single command

## Notes:

The best way to see all repositories (in scalable maner) is by implementing https://github.com/bvaughn/react-virtualized. 
However, in this version it is not implemented yet. 
The main (Repositories) page loads 'react' reposositories at the first time, you may remove it by deleting 'componentWillMount function' that is located in RepoSearch component.  

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

#### API
* Search for repository is available on `localhost:5000/api/search/:searchItem` (Get request)
* Bookmark repository is available on `localhost:5000/api/bookmarks/:repoId` (Post request)
* Delete repository is available on `localhost:5000/api/bookmarks/:repoId` (Delete request)
* Get all repositories is available on `localhost:5000/api/bookmarks` (Get request)

## Code location
The backend code is located in api folder. 
The Front-end code is located in client folder.

### Author
Ruslan Ibragimov

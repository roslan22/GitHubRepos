import { ACTION_NAME, SUCCESS_STATUSES } from '../constants'

let initState = {
    listOfRepos: [],
    searchValue: '',
    bookmarks: [],
    bookmarkedRepos: []
};

const repositoriesReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ACTION_NAME.getRepositories:
            console.log(`current state is:${state.repositories, state}`)
            state = {
                ...state,
                listOfRepos: payload
            }
            return state;
        case ACTION_NAME.addBookmark:
            if (payload.status !== SUCCESS_STATUSES.created) {
                console.log("the bookmark wasn't found");
                return state;
            }

            state = {
                ...state,
                bookmarks: [...state.bookmarks, payload.bookmarkedRepoId]
            }
            return state;
        case ACTION_NAME.getBookmarkedRepos:
            if (payload.status !== SUCCESS_STATUSES.success) {
                console.log("the bookmarks wasn't found");
                return state;
            }

            state = {
                ...state,
                bookmarkedRepos: payload.bookmarkedRepos
            }
            return state;
        default:
            return state
    }
}

export default repositoriesReducer;

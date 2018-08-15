import {GET_REPOSITORIES, ADD_BOOKMARK} from '../actions/constants'
const CREATED_STATUS = 201;

let initState = {
    listOfRepos : [],
    searchValue : '',
    bookmarks: []
};

const repositoriesReducer = (state = initState, {type, payload}) => {
    switch (type) {     
        case GET_REPOSITORIES:
            console.log(`current state is:${state.repositories, state}`)
            state = {
                ...state, 
                listOfRepos : payload
            }
        return state;
        case ADD_BOOKMARK:
            if(payload.status !== CREATED_STATUS)
            {
                console.log("the bookmark wasn't found");
                return state;
            }

            state = {
                ...state, 
                bookmarks : [...state.bookmarks, payload.bookmarkedRepoId]
            }
        return state;
      default:
        return state
    }
}

export default repositoriesReducer;

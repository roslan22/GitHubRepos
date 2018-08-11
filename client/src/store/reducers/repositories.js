import {GET_REPOSITORIES} from '../actions/constants'

let initState = {
    listOfRepos : [],
    searchValue : ''
};

const repositoriesReducer = (state = initState, {type, payload}) => {
    switch (type) {     
        case GET_REPOSITORIES:
        console.log(`current state is:${state.repositories, state}`)
        state = {
            ...state, 
            listOfRepos : payload
        }
        return state
      default:
        return state
    }
}

export default repositoriesReducer;

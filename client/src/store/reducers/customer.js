import {GET_REPOSITORIES} from '../actions/constants'

const customerReducer = (state = [], {type, payload}) => {
    switch (type) {     
        case GET_REPOSITORIES:
        //state.repositories = payload
        return payload
      default:
        return state
    }
}

export default customerReducer;

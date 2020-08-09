import {LOGGED_IN} from "../actions/action";

const currentUserReducer = (state = null, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return action.currentUser
        default:
            return state
    }
}

export default currentUserReducer

import {LOGIN} from "../constants/reducerConstants";

const auth = (state, action) => {
    switch (action.type) {
        case LOGIN:
        let value = {
            ...state,
            [action.key]: action.value
        }
        return value;
        default:
            return state;
    }
};

auth.initialState = {
    currentUser: null,
    error: null
}

export default auth;
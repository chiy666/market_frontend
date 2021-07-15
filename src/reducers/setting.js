import {SETTING} from "../constants/reducerConstants";

const setting = (state, action) => {
    switch (action.type) {
        case SETTING:
            console.log('state' + {...state});
            return {
                ...state
            };
        default:
            return state;
    }
};

setting.initialState = {
    appName: 'Second Hand Market',
    error: null
}

export default setting;

import React, {createContext, useReducer} from "react";
import auth from "./reducers/auth";
import setting from "./reducers/setting";

const combineReducers = (slices) => (state, action) =>
    Object.keys(slices).reduce( // use for..in loop, if you prefer it
        // some issues to merge the state
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state
    );

const initialState = {
    auth: auth.initialState,
    setting: setting.initialState,
    }; // some state for props a, b
const rootReducer = combineReducers({auth, setting});

const Store = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    // Important(!): memoize array value. Else all context consumers update on *every* render
    const store = React.useMemo(() => [state, dispatch], [state]);
    return (
        <Context.Provider value={store}> {children} </Context.Provider>
    );
};

export const Context = createContext(initialState);
export default Store;
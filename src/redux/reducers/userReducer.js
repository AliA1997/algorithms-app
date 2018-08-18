//Define your initialState in your reducer 
const initialState = {
    user: null
}

//Define your action types 
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//Export default the function with a state by default set to initialState and action
export default (state=initialState, action) => {
    //do a switch statement
    switch(action.type) {
        case LOGIN:
        return {...state, user: action.payload};
        case LOGOUT:
        return {...state, user: null};
        default:
        return state;
    }
}

//Define your actions
export const login = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}
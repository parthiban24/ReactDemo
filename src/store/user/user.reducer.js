import { USER_ACTION_TYPE } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

export const UserReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            //throw new Error(`Unhandled type ${type} in userReducer`);
            return state
    }
}


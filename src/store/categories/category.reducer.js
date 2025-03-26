import { CATAGORIES_ACTION_TYPE } from './category.types';

const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CATAGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true }
        case CATAGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false
            }
        case CATAGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}



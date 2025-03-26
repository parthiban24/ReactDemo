import createAction from '../../utils/reducer/reducer.utils';
import { CATAGORIES_ACTION_TYPE } from './category.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// export const setCategoriesMap = (categoriesArray) => {
//     return createAction(CATAGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
// }
export const fetchCategoriesStart = () =>
    createAction(CATAGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(
        CATAGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    );

export const fetchCategoriesFailed = (error) =>
    createAction(CATAGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error)

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//         const categoriesArray = await getCategoriesAndDocuments();
//         dispatch(fetchCategoriesSuccess(categoriesArray));

//     }
//     catch (error) {
//         dispatch(fetchCategoriesFailed(error));
//     }

// }

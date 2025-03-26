import { call, all, takeLatest, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action'
import { CATAGORIES_ACTION_TYPE } from './category.types';

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
        //dispatch(fetchCategoriesSuccess(categoriesArray));
    }
    catch (error) {
        yield put(fetchCategoriesFailed(error));
        //dispatch(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATAGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categorieSaga() {
    yield all([call(onFetchCategories)])
}
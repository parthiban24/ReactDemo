import { all, call } from "redux-saga/effects";
import { categorieSaga } from './categories/category.saga';

export function* rootSaga() {
    yield all([call(categorieSaga)]);
}
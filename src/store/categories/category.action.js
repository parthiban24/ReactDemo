import createAction  from '../../utils/reducer/reducer.utils';
import { CATAGORIES_ACTION_TYPE } from './category.types';

export const setCategoriesMap = (categoriesArray) => {
    return createAction(CATAGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
}
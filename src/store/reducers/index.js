import {
    combineReducers
} from 'redux';
import postReducer from './postReducer';
import modal from './modal';
import generalPurposeReducer from './generalPurposeReducer';
import companyListReducer from './companyReducer';


export default combineReducers({
    posts: postReducer,
    modal,
    generalPurpose: generalPurposeReducer,
    companyList: companyListReducer
})
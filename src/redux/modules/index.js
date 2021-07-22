import { combineReducers } from 'redux';
import userInfo from './userInfo';
import count from './count';

const reducers = combineReducers({
    userInfo,
    count
});

export default reducers;
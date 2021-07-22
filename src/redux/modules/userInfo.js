import axios from "axios";
import { useDispatch } from "react-redux";

const SET_USERINFO = 'SET_USERINFO';

export const setUserInfo = (userInfo) => ({ type: SET_USERINFO, userInfo });

const initialState = {
    userInfo: {}
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_USERINFO:
            return applySetUserInfo(state, action);
        default:
            return state;
    }
}

export const applySetUserInfo = (state = initialState, action) => {
    const { userInfo } = action;

    return {
        ...state,
        userInfo
    }
}

export const getUserInfo = (code) => {
    return function(dispatch, getState, { history }){
        axios({
            method: "GET",
            url: `http://localhost:8081/login/kakao?code=${code}`,
        })
        .then( res => {
            console.log('res: ', res);
            console.log('dispatch: ', dispatch);
            history.push('/main');

            dispatch(setUserInfo(res.data))
            
        })
        .catch( err => {
            console.log('err: ', err);
        })
    }   
}

export const actionCreators = {
    getUserInfo,
    setUserInfo,
};
const SET_USERINFO = 'SET_USERINFO';

export const setUserInfo = () => ({ type: SET_USERINFO });

const initialState = {
    userInfo: undefined
}

export default function applySetUserInfo(state = initialState, action){
    return {
        ...state,
        userInfo: action.userInfo
    }
}
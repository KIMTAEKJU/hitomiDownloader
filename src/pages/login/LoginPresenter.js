import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const kakaoLogin = (histroy) => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`;
}

const Login = (props) => {

    console.log('props: ', props);
    const { Kakao } = window;
    console.log('kakao: ', Kakao);
    return (
        <>
            <button onClick={() => kakaoLogin(props.histroy)}>
                버튼 
            </button>
        </>
    )
}

export default Login;
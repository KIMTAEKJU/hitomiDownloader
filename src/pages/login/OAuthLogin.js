import react from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as userInfoActions } from '../../redux/modules/userInfo';

const OAuthLogin = ({ location }) => {

    const dispatch = useDispatch();

    let code = new URL(window.location.href).searchParams.get("code");
    console.log('code: ', code);

    useEffect( () => {
         dispatch(userInfoActions.getUserInfo(code));
    }, []);

    return (
        <>
        </>
    )
}

export default OAuthLogin;
import { connect, useSelector, useDispatch } from 'react-redux';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {

    const dispatch = useDispatch();
    const LoginContainer = useSelector((store) => store.userInfo);
    
    return (
        <LoginPresenter/>
    )
}

export default LoginContainer;
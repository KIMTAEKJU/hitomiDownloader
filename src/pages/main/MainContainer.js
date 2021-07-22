import react from 'react';
import { useSelector } from 'react-redux';
import MainPresenter from './MainPresenter';

const MainContainer = () => {

    console.log('메인컨테이너');

    const userInfo = useSelector((store) => store.userInfo);

    return (
        <MainPresenter
            userInfo={userInfo}
        />
    )
}

export default MainContainer;
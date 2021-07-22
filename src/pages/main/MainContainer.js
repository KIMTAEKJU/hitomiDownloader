import react from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainPresenter from './MainPresenter';
import { actionCreators as countAction } from '../../redux/modules/count';

const MainContainer = () => {

    console.log('메인컨테이너');

    const dispatch = useDispatch();

    const { userInfo, count } = useSelector((store) => ({
        userInfo: store.userInfo,
        count: store.count
    }));

    return (
        <MainPresenter
            userInfo={userInfo}
            countPlus={() => dispatch(countAction.setCount())}
        />
    )
}

export default MainContainer;
import react from 'react';

const MainPresenter = (props) => {

    console.log('this.props: ', props);
    return (
        <div>
            <span>
                메인 페이지        
            </span>
            <button onClick={props.countPlus}>
                버튼
            </button>
        </div>   
    )
}

export default MainPresenter;
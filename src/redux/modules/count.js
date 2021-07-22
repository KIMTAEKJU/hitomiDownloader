
export const INCREMENT = "INCREMENT";

export const setCount = () => ({type: 'INCREMENT'});

const initialState = {
    count: 0
};

export default function reducers(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
}

export const actionCreators = {
    setCount
}
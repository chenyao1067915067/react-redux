let count = 0;

const increment = {
    type: 'INCRMENT'
}

const decrement = {
    type: 'DECREMENT'
}

const reducer = (state = count, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state += 1000;
        case 'DECREMENT':
            return state -= 1000;
        default:
            return state;
    }
}

export default reducer;
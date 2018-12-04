export default (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT-1': return { count: state.count + 1 };
        case 'DECREMENT-1': return { count: state.count - 1 };
        default: return state;
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET-ARTICLES':
            return { ...state, articles: action.payload }
        default:
            return state;
    }

};

export default reducer;
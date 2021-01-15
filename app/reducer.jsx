const reducer = (state, action) => {
    switch (action.type) {
        case 'SET-ARTICLES':
            return { ...state, articles: action.payload }
        case 'SET-CATEGORIES':
            return { ...state, categories: action.payload }
        case 'SET-CATEGORY':
            return { ...state, category: action.payload }
        default:
            return state;
    }

};

export default reducer;
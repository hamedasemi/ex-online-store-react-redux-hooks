import { StrictMode, useReducer } from 'react';
import { render } from 'react-dom';
import style from './app.css';
import reducer from './reducer';
import { Provider } from './context';
import { Articles } from './articles/articles';
import { Categories } from './categories/categories';

const App = () => {
    const initialState = {
        articles: [],
        categories: [],
        category:""
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    return <StrictMode>
        <Provider value={{ state, dispatch }}>
            <Categories></Categories>
            <Articles></Articles>
        </Provider>
    </StrictMode>
};

render(<App />, document.querySelector('article'));
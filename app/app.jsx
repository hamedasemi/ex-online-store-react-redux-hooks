import { StrictMode, useReducer } from 'react';
import { render } from 'react-dom';
import style from './app.css';
import reducer from './reducer';
import { Provider } from './context';
import { Articles } from './articles/articles';

const App = () => {
    const initialState = {
        articles: []
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    return <StrictMode>
        <Provider value={{ state, dispatch }}>
            <Articles></Articles>
        </Provider>
    </StrictMode>
};

render(<App />, document.querySelector('article'));
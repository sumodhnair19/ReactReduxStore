import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { compose, Reducer, StoreEnhancer, createStore, Store, applyMiddleware } from 'redux';
import AppState from './AppState';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

let enhancer: StoreEnhancer<AppState>;
if (window.__REDUX_DEVTOOLS_EXTENSION__ ) {
    enhancer = compose(
        window.__REDUX_DEVTOOLS_EXTENSION__({
            serialize: {
                options: true,
            }
        })
    );
}

const _createStore = (r: Reducer<AppState>) => enhancer ? createStore(reducer, enhancer) : createStore(reducer);
const store: Store<AppState> = applyMiddleware(thunk)(_createStore)(reducer) as Store<AppState>;

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

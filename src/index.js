import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import { Provider } from 'react-redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const store = createStore(rootReducer, {}, applyMiddleware(promise(),thunk,logger));
store.subscribe(() => {
    console.log("Udate Store", store.getState());
});
ReactDOM.render(
    
    <BrowserRouter>
    <Provider store={store}>
        <App /> 
    </Provider>
    </BrowserRouter>
    
    , document.getElementById('root'));
registerServiceWorker();

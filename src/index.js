import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/index'

const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
//registerServiceWorker();



// store.dispatch({
//     type: 'CREATE_POST',
//     title: 'title',
//     content: 'My Content'
// })

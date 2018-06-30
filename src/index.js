import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/index'
import thunk from 'redux-thunk'


// const store = createStore(reducer, 
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 const store = createStore(reducer, 
      applyMiddleware(thunk))


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

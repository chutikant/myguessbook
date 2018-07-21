import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'

import Cookies from 'universal-cookie'

import { ApolloProvider } from 'react-apollo'
import createApolloClient from './libs/createApolloClient'
import createReduxStore from './libs/createReduxStore'

const cookie = new Cookies()
const token = cookie.get('token')


const initialState = {auth: {token}}
const store = createReduxStore(initialState)

// const store = createStore(reducer, 
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//  const store = createStore(
//      reducer,
//      {auth: {token}},
//      compose(
//          applyMiddleware(thunk),
//          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//      )
//     ) 

const client = createApolloClient(store)

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root'));
//registerServiceWorker();



// store.dispatch({
//     type: 'CREATE_POST',
//     title: 'title',
//     content: 'My Content'
// })

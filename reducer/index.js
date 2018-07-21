import {combineReducers } from 'redux'

function counterReducer(state = 0, action) {
    // console.log('counterReducer', state)
    switch (action.type) {
        case "INCREASE_COUNTER":
            return state + 1
        default:
            return state
    }
}

function postReducer(state = [], action) {
    // console.log('postReducer', state)
    //redux don't mutate old state you have to create a new one
    switch (action.type) {
        case 'CREATE_POST':
            return [...state, {_id:action._id, title: action.title, content: action.content }]
        case 'RECEIVE_POST': 
            return [...state, ...action.posts]
        default:
            return state;
    }
}

function authReducer(state = {}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, token : action.token}
        case 'LOGOUT': 
            return {}
        default:
            return state;
    }
}
const reducer = combineReducers({
    counter:counterReducer,
    posts: postReducer,
    auth: authReducer
})

export default reducer
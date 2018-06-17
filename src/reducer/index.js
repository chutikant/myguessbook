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
    switch (action.type) {
        case 'CREATE_POST':
            return [...state, {_id:action._id, title: action.title, content: action.content }]
        default:
            return state;
    }
}

const reducer = combineReducers({
    counter:counterReducer,
    posts: postReducer
})

export default reducer
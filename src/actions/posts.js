
//export per function when you use you have to import and deconstruc
export function createPost(title, content) {
    const _id = '' + Math.random()
    return {
        type: 'CREATE_POST',
        _id,
        title,
        content
    }

}

export function receivePost(posts) {
    return {
        type: 'RECEIVE_POST',
        posts: posts
    }
}

//query api
export function fetchPosts() {
    //getState return state in store
    return (dispatch, getState) => {
        //fetch api
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(json => {
            dispatch(receivePost(json))
        }).catch(e => {

        })
        //dispatch 
        console.log(getState)
    }
}
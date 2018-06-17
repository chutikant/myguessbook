import React from 'react'
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import FilterInput from './FilterInput';
import FilterablePostList from './FilterablePostList'
import {connect} from 'react-redux'

class GuestBookApp extends React.Component {
    state = {
        // posts: [],
        filterText: ''
    }

    handleOnCreatePost = ({ title, content }) => {
        const _id = '' + Math.random()
        const post = {
            _id,
            title,
            content
        }
       // const newPosts = [post, ...this.state.posts] //should create new array 
        this.props.onCreatePost(post)
       
    }
    handleFilterInputChange = (e) => {
        this.setState({
            filterText: e.target.value
        })
    }

    componentDidMount() {
        console.log(this.props)
      
        //fetch data when UI's complete rendered
        //fetch return promise
        // fetch('http://localhost:3000/posts')
        // .then(res => res.json())
        // .then(json => {
        //     this.setState({
        //         posts: json
        //     })
        // })
    }

    render() {
        //return boolean if true ==> push to new array
        return (
            <React.Fragment>
                <h1>My Guest Book</h1>
                <NewPostForm onCreatePost={this.handleOnCreatePost} />
                <input value={this.state.filterText} onChange={this.handleFilterInputChange} />
                <FilterablePostList posts={this.props.posts} filterText={this.state.filterText} />
            </React.Fragment>
        )
    }
}


//connect()(GuestBookApp) จะได้ component ออกไป

//auto get state from store  
function mapStateToProps(state) {
    return {posts: state.posts }
}

//return props for component
function mapDispatchToProps(dispatch) {
    return {
        onCreatePost: (post) => 
          dispatch({type: 'CREATE_POST', ...post})
    }
}

//connect(): 1 first argument is a function that will return props for this component
export default connect(mapStateToProps, mapDispatchToProps)(GuestBookApp)
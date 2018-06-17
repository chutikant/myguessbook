import React from 'react'
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import FilterInput from './FilterInput';
import FilterablePostList from './FilterablePostList';

class GuestBookApp extends React.Component {
    state = {
        posts: [],
        filterText: ''
    }

    handleOnCreatePost = ({ title, content }) => {
        const _id = '' + Math.random()
        const post = {
            _id,
            title,
            content
        }
        const newPosts = [post, ...this.state.posts] //should create new array 
        this.setState({
            posts: newPosts
        })
    }
    handleFilterInputChange = (e) => {
        this.setState({
            filterText: e.target.value
        })
    }

    componentDidMount() {
        //fetch data when UI's complete rendered
        //fetch return promise
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(json => {
            this.setState({
                posts: json
            })
        })
    }
    render() {
        //return boolean if true ==> push to new array
        return (
            <React.Fragment>
                <h1>My Guest Book</h1>
                <NewPostForm onCreatePost={this.handleOnCreatePost} />
                <input value={this.state.filterText} onChange={this.handleFilterInputChange} />
                <FilterablePostList posts={this.state.posts} filterText={this.state.filterText} />
            </React.Fragment>
        )
    }
}
export default GuestBookApp
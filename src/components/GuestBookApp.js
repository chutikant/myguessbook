import React from 'react'
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import FilterInput from './FilterInput';
import FilterablePostList from './FilterablePostList';
const mockPosts = [{
    "id": 1,
    "title": "Revolution Lighting Technologies, Inc.",
    "content": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
}, {
    "id": 2,
    "title": "American National Insurance Company",
    "content": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
}, {
    "id": 3,
    "title": "Seaspan Corporation",
    "content": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
}, {
    "id": 4,
    "title": "Weibo Corporation",
    "content": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
}, {
    "id": 5,
    "title": "Hilton Grand Vacations Inc.",
    "content": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
}]
class GuestBookApp extends React.Component {
    state = {
        posts: mockPosts,
        filterText: ''
    }

    handleOnCreatePost = ({ title, content }) => {
        const id = '' + Math.random()
        const post = {
            id,
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
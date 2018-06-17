import React from 'react'
import PostList from './PostList'
class FilterablePostList extends React.Component {


    render() {
        const filterPostListItems = this.props.posts.filter((post) => {
            return post.title.toLocaleLowerCase().includes(this.props.filterText.toLocaleLowerCase())
        })
        return <PostList posts={filterPostListItems}/>
    }
}
export default FilterablePostList
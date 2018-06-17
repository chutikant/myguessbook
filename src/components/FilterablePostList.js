import React from 'react'
import PostListItem from './PostListItem'
class FilterablePostList extends React.Component {


    render() {
        const postListItems = this.props.posts.filter((post) => {
            return post.title.toLocaleLowerCase().includes(this.props.filterText.toLocaleLowerCase())
        }).map((post) => {
            return <PostListItem post={post} key={post.id} />
        })
        return (
            <div>
                {postListItems}
            </div>
        )
    }
}
export default FilterablePostList
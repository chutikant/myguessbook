import React from 'react'
import PostListItem from './PostListItem'
class PostList extends React.Component {
    render() {
        //console.log(props)
        const postListItems = this.props.posts.map((post) => {
            return <PostListItem post={post} key={post.id}/>
        })
        return (
            <div>
                {postListItems}
            </div>
        )
    }
}
export default PostList
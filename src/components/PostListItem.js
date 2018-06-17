import React from 'react'
class PostListItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h4>{this.props.post.title}</h4>
                    <p>{this.props.post.content}</p>
                </div>
            </React.Fragment>
        )
    }
}
export default PostListItem
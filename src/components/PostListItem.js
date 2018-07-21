import React from 'react'
import styled from 'styled-components'

const PostItemBox = styled.div`
    background: #ffffff;
    padding: 16px;
    margin-bottom: 20px;
    border: 1px #f5cd79 solid;

    .post-title {
        font-size:20px;
        color:#000000;
    }

    p {
        font-size: 16px;
    }
`
class PostListItem extends React.Component {
    render() {
        return (
            <React.Fragment >
                <PostItemBox  >
                    <h4 className="post-title">{this.props.post.title}</h4>
                    <p>{this.props.post.content}</p>
                </PostItemBox>
            </React.Fragment>
        )
    }
}
export default PostListItem
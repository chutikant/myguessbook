import React from 'react'
import gql from 'graphql-tag'
import {Query, graphql, Mutation} from 'react-apollo'
import PostList from './PostList'
import NewPostForm from './NewPostForm'

const createPostMutation = gql`
 mutation createPost($data: PostData!) {
    post: createPost(data:$data) {
      id
      title
      tags {
            name
            },
      content
    }
  }`
const postsQuery = gql`
    query listPost {
        posts {
            id,
            title,
            tags {
                name
            },
            content
        }
    }
`


class GuestBookApollo extends React.Component {
   
    render() {
        console.log(this.props)
        if (this.props.loading) {
            return <div>Loading..</div>
        }
        return (
            <React.Fragment>
                <Mutation 
                    mutation={createPostMutation} 
                    update={(cache,result) => {
                        console.log('ggggg',result)
                        const {posts} = cache.readQuery({query: postsQuery});
                        const newPosts = [...posts, result.data.post]
                        cache.writeQuery({
                            query: postsQuery,
                            data: {posts: newPosts}

                        })
                    }}
                >
                {createPostMutate => {
                    return (
                        <NewPostForm onCreatePost={(data)=>{
                            const variables = {data}
                            createPostMutate({
                                variables
                            })

                        }} />
                    )
                }}
                
                </Mutation>
                <PostList posts={this.props.posts}/>
            </React.Fragment>
        
        )
    }
}

//call function graphql
//query from api will be props.
export default graphql(postsQuery, {
    //result from graphql
    props: (result) => {
        console.log(result)
        return {
            posts: result.data.posts,
            loading: result.data.loading
        }
    }
})(GuestBookApollo)
//graphql function
//what return from parameter 2 it will be props for this component

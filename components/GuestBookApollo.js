import React from 'react'
import gql from 'graphql-tag'
import { Query, graphql, Mutation } from 'react-apollo'
import PostList from './PostList'
import NewPostForm from './NewPostForm'
import { subscribe } from 'graphql';

const _postFragment = gql`
    fragment postFragment on Post {
      id
      title
      tags {
            name
            },
      content
    }
`
const createPostMutation = gql`
    mutation createPost($data: PostData!) {
        post: createPost(data:$data) {
            ...postFragment
        }
    }
    ${_postFragment}
  `
const postsQuery = gql`
    query listPost {
        posts {
            ...postFragment
        }
    }
    ${_postFragment}
`

const postCreatedSubscription = gql`
    subscription postCreated {
        postCreated {
            ...postFragment
        }
    }
    ${_postFragment}
`


class GuestBookApollo extends React.Component {

    componentDidMount() {
        this.props.subscribe()
    }

    render() {
        //console.log(this.props)
        if (this.props.loading) {
            return <div>Loading..</div>
        }
        return (
            <React.Fragment>
                <Mutation
                    mutation={createPostMutation}
                    update={(cache, result) => {
                        const { posts } = cache.readQuery({ query: postsQuery });
                        const newPosts = [...posts, result.data.post]
                        cache.writeQuery({
                            query: postsQuery,
                            data: { posts: newPosts }

                        })
                    }}
                >
                    {createPostMutate => {
                        return (
                            <NewPostForm onCreatePost={(data) => {
                                const variables = { data }
                                createPostMutate({
                                    variables
                                })

                            }} />
                        )
                    }}

                </Mutation>
                <PostList posts={this.props.posts} />
            </React.Fragment>

        )
    }
}

//call function graphql
//query from api will be props.
export default graphql(postsQuery, {
    //result from graphql
    props: (result) => {
        //console.log(result)
        return {
            posts: result.data.posts,
            loading: result.data.loading,

            //1
            subscribe: () => {
                result.data.subscribeToMore({
                    document: postCreatedSubscription,
                    updateQuery: (prev, { subscriptionData }) => {
                        // 1. check
                        //console.log('ddddd',prev, subscriptionData)
                        if (!subscriptionData.data.postCreated) return prev

                        // 2. Post Data
                        const postCreated = subscriptionData.data.postCreated

                        // if(prev.propts.includes((post) => post.id === postCreated.id)) {
                        //     return 
                        // }

                        // 3. New Result
                        return Object.assign({}, prev, {
                            posts: [...prev.posts, postCreated]
                        })
                    }
                })
            }
        }
    }
})(GuestBookApollo)
//graphql function
//what return from parameter 2 it will be props for this component

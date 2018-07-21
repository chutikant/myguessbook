import React from 'react'
import {connect} from 'react-redux'
import {loginSuccess, logout} from '../actions/auth'
//import {withRouter} from 'react-router-dom'
import {withRouter} from 'next/router'
import {Mutation, graphql} from 'react-apollo'
import gql from 'graphql-tag'

const loginMutation = gql`
    mutation login($username: String!, $password: String!) {
       token:  login(username:$username, password: $password) 
    }`
class LoginForm extends React.Component {

    state = {
        username: '',
        password: ''
    }
    handleUsernameChange = (e) => {
        this.setState({username : e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password : e.target.value})
    }
    handleSubmit = (e) => {
       e.preventDefault();
        
        let {username,password} = this.state
        fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'content-type':'application/json'
            }
        }).then(res => {
            //first then return response
           return res.json()
        }).then(json => {
           this.props.onLoginSuccess(json.token)
        })
    
        
    }
    render() {
        if(this.props.isLoggedIn) {
            return (
            <div>
                <p>Logged in</p>
                <button onClick={this.props.onLogout}>Logout</button>
            </div>
            )
        }
        return (
        <Mutation mutation={loginMutation}>
           {(mutateFn, result) => {
               return (
                <form onSubmit={async (e) => {
                    e.preventDefault()
                    const result = await mutateFn({
                        variables: {
                            username: this.state.username, //key habe to match $username
                            password: this.state.password
                        }
                    })
                    //console.log(result)
                    
                    if(!result.data.token) {
                        return alert('Login Failed!')
                    }

                    this.props.onLoginSuccess(result.data.token)
                }}>
                    <div>
                        <input
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                            type="text"
                            name="create-title"
                            placeholder="Username" />
                
                
                        <input
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            type="password"
                            name="create-title"
                            placeholder="Password" />
                
                        <button type="submit">sign in</button>
                    </div>
                </form>
               )
           }

           }
        </Mutation>
        )
    }
}

function mapStateToProps(state) {
    //console.log(ownProps)
    return {
       // isLoggedIn: typeof state.auth.token !== 'undefined' //state.aauth.token != null
        //isLoggedIn: !!state.auth.token
        isLoggedIn: state.auth.token != null
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    //console.log(ownProps)
    return {
        onLoginSuccess: (token) => {
            dispatch(loginSuccess(token))
            ownProps.router.replace('/')
           // ownProps.history.replace('/')
        },
        onLogout:() => {
            dispatch(logout())
        }
    }
}

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps)(LoginForm))


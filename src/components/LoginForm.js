import React from 'react'
import {connect} from 'react-redux'
import {loginSuccess, logout} from '../actions/auth'
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
        <React.Fragment>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
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
        </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
       // isLoggedIn: typeof state.auth.token !== 'undefined' //state.aauth.token != null
        //isLoggedIn: !!state.auth.token
        isLoggedIn: state.auth.token != null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoginSuccess: (token) => {
            dispatch(loginSuccess(token))
        },
        onLogout:() => {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)


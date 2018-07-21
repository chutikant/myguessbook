//all file in pages folder will be route for our app!
import React from 'react'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'


class Login extends React.Component {
    render() {
        return (
            <LoginForm />
        )
    }

}

export default Login
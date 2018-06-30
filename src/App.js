import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import GuestBookApp from './components/GuestBookApp';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
injectGlobal`
  body {
    background: #ffffff;
  }
`
const Container = styled.div`
  width:640px;
  margin: 0 auto;
  margin-bottom: 20px;
  background: ${(props) => props.background} 
`
Container.defaultProps = {
  background: "yellow"
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container background="#ffffff">
          {/* <GuestBookApp/> */}
          <div>
            <Link to="/home">Home</Link> / 
            <Link to="/login">Login</Link>
          </div>
          <Switch>
            <Route exect path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}



export default App;

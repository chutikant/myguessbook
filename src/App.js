import React, { Component } from 'react';
import styled, {injectGlobal} from 'styled-components'

import GuestBookApp from './components/GuestBookApp';
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
      <Container background="#ffffff">
        <GuestBookApp/>
      </Container>
    );
  }
}



export default App;

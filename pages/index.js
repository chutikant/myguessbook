//all file in pages folder will be route for our app!
import React from 'react'

class Index extends React.Component {

    static getInitialProps(ctx) {
        return {
            name: 'Pook'
        }
    }

    render() {
        return (
        <>
            <h1>Index {this.props.name}</h1>
        </>
        )
    }

}

export default Index
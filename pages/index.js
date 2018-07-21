//all file in pages folder will be route for our app!
import React from 'react'
import Link from 'next/link'
import GuestBookApollo from '../components/GuestBookApollo'

class Index extends React.Component {

    static getInitialProps(ctx) {
        return {
            name: 'Pook'
        }
    }

    render() {
        return (
            <GuestBookApollo />
        )
    }

}

export default Index
import App, {Container} from 'next/app'
import Link from 'next/link'
import React from 'react'
import withApollo from '../libs/withApollo'
import {ApolloProvider} from 'react-apollo'

class MyApp extends App {
//getInitiall by withApollo instead below code

/** 
    static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }  **/

  render () {
    // const {Component, pageProps} = this.props
    const {Component, pageProps, apolloClient} = this.props
    return ( 
        <ApolloProvider client={apolloClient}>
        <Container>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
            <Component {...pageProps} />
        </Container>
        </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
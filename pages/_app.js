import App, {Container} from 'next/app'
import Link from 'next/link'
import React from 'react'
import withApollo from '../libs/withApollo'
import {ApolloProvider} from 'react-apollo'
import {Provider} from 'react-redux'

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
    const {Component, pageProps, apolloClient, reduxStore} = this.props
    return ( 
        <Provider store={reduxStore}>
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
        </Provider>
    )
  }
}

export default withApollo(MyApp)
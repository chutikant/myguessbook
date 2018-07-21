import React from 'react'

class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 1
        }
        console.log('constructor')

        //call once only when  create component
        //responsible set paren's prop to my  state
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state)
        return { ...state, ...props }
        //everything that return from this function will be new state!
        //call everytime that props change or state change or create component
    }//call before render
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
        //this function will be return boolean
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return "getSnapShot"
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        console.log(' -', prevProps)
        console.log(' -', prevState)
        console.log(' -', snapshot)
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    render() {
        console.log('render', this.props, this.state)
        return (
            <h1>Life Cycle</h1>
        )
    }
}

export default Lifecycle
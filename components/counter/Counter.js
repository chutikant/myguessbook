import React from 'react'
import CounterControl from './CounterControl'
import MultiplyDisplay from './MultiplyDisplay'
import PowerDisplay from './PowerDisplay'
import Lifecycle from './Lifecycle'

class Counter extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         counter: 0
    //     }
    //     this.onAdd = this.onAdd.bind(this); //bild function onAdd to varaible this.onAdd
    // arrow function จะ auto bind ให้
    // }
    state = { counter: 0,
              power: 1 }

    onAdd = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    onMinus = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    onReset = () => {
        this.setState({ counter: 0 })
    }
    ///this.handleChange = this.handleChange.bind(this);
    onAddPower = () => {
        this.setState({ power: this.state.power + 1 })
    }

    onMinusPower = () => {
        this.setState({ power: this.state.power - 1 })
    }

    onResetPower = () => {
        this.setState({ power: 1 })
    }

    
    handleChange = (event) => {
        this.setState({counter: event.target.value});
     }

    render() {
        return (
            <React.Fragment>
                
                <h1>Counter</h1>           
                <h1>n: {this.state.counter}</h1>
                <MultiplyDisplay multiplier={this.state.power} number={this.state.counter} />    
                <PowerDisplay power={this.state.power} base={this.state.counter} />                
                              
                <input type="text" value={this.state.counter} onChange={this.handleChange}/>                
                <CounterControl onAdd={this.onAdd} onMinus={this.onMinus} onReset={this.onReset}/>                
                <h2> power: {this.state.power} </h2>           
                <CounterControl onAdd={this.onAddPower} onMinus={this.onMinusPower} onReset={this.onResetPower}/>
                <Lifecycle myProp="myProp" />
            </React.Fragment>
        )
    }
}

export default Counter
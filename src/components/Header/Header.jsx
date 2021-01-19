import logo from '../../logo.svg';
import React, { Component } from 'react'
import '../../App.css';

export default class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    Coin Exchange
                </header> 
            </div>
        )
    }
}

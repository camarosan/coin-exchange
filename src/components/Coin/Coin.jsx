import React, { Component } from 'react'
import PropTypes from 'prop-types'; // for use with Component.propTypes 

import styled from 'styled-components'

const Tr = styled.tr `
    width: 50vh;
    font-family: "Times New Roman", Times, serif;
    border: 10px solid #1C6EA4;
    background-color: #2a6296c0;
    height: 60px;
    text-align: center;
    margin:auto;
`; 

const Td = styled.td`
    border: 1px solid black;
    width: 60vh;
`

export default class Coin extends Component {
    constructor(props){
        super(props);
            this.handleClick = this.handleClick.bind(this);
            this.example = 10000
        
    }
    
    /*componentDidMount() {
        const callback = () => {
            const randomPercentage = 0.995 + Math.random() *0.01;
            this.setState(function(oldState) {
                return {
                    priceOnline: oldState.priceOnline * randomPercentage
                }
            });
        }
        setInterval(callback, 1000);
    }*/

    handleClick(event) {
        // prevent the default action of submitting the form 
        event.preventDefault(); // for check the error when you click on Refresh Button 
        this.props.handleRefresh(this.props.ticker); 
       /* const randomPercentage = 0.995 + Math.random() *0.01;
            this.setState(function(oldState) {
                return {
                    price: oldState.price * randomPercentage
                }
            });*/ 
    }
        
    render() {
        return (
            <Tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                <Td>${this.example}</Td>
                <Td>
                    <form action = "#" method = "POST">  
                        <button onClick={this.handleClick }>Refresh</button>
                    </form>
                </Td>
            </Tr>
        );
    }
}

Component.propTypes = {
    name: PropTypes.string,
    ticker: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string, 
};

  
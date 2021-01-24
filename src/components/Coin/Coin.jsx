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
    }
    
    handleClick(event) {
        event.preventDefault();  
        this.props.handleRefresh(this.props.ticker);
    }
        
    render() {
        return ( 
            <Tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                {this.props.showBalance ? <Td>${this.props.balance}</Td> : null }
                
                <Td>
                    <form action = "#" method = "POST"/>  
                        <button onClick={this.handleClick }>Refresh</button>
                </Td>
            </Tr>    
        );
    }
}

Component.propTypes = {
    name: PropTypes.string,
    ticker: PropTypes.string,
    price: PropTypes.number,
    balance: PropTypes.number,  
};

  
import React, { Component } from 'react'
import PropTypes from 'prop-types'; // for use with Component.propTypes 

import styled from 'styled-components'
// we simplify the style with ony Td
const Td = styled.td` 
    border: 1px solid black;
    width: 60vh;
`

export default class Coin extends Component {
    handleClick = (event) => { // for class properties arrow function 
        event.preventDefault(); 
        this.props.handleRefresh(this.props.id);
    }
        
    render() {
        return ( 
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                {this.props.showBalance ? <Td>${this.props.balance}</Td> : null }
                
                <Td>
                    <form action = "#" method = "POST"/>  
                        <button onClick={this.handleClick }>Refresh</button>
                </Td>
            </tr>    
        );
    }
}

Component.propTypes = {
    name: PropTypes.string,
    ticker: PropTypes.string,
    price: PropTypes.number,
    balance: PropTypes.number,  
    id: PropTypes.string, 
};

  
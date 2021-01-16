import React, { Component } from 'react'
// import './Coin.css';
import PropTypes from 'prop-types'; // for use with Component.propTypes 

import styled from 'styled-components'

const Tr = styled.tr `
    width: 100%;
    font-family: "Times New Roman", Times, serif;
    border: 10px solid #1C6EA4;
    background-color: #2a6296c0;
    height: 50px;
    text-align: center;
    margin:auto;
    
`; 
const Td = styled.td`
    border: 1px solid black;
`


const Th = styled.th`
    border: 1px solid black;
`
export default class Coin extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            priceOnline: this.props.price
        } 
        this.handleClick = this.handleClick.bind(this); // mandatory event bindings
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
        const randomPercentage = 0.995 + Math.random() *0.01;

            this.setState(function(oldState) {
                return {
                    priceOnline: oldState.priceOnline * randomPercentage
                }
            });
    }
        
    render() {
        
          
        return (
            
            <Tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                <Td>${this.state.priceOnline}</Td>
                <Td>
                    <form action = "#" method = "POST"> // action and method are mandatory 
                    <button onClick={this.handleClick}> Refresh </button>
                    </form>
                </Td>
            </Tr>
              
        );
        
    }
}

Component.propTypes = {
   
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string,
    price: PropTypes.number,
  };

  
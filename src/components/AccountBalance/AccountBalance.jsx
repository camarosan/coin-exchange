import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section `
text-align: center;
background: transparent;
border-radius: 20px;
border: 2px solid palevioletred;
color: black;
margin: 1 1em;
padding: 0.25em 1em;
`

export default class AccountBalance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showBalance : this.props.showBalance,
        }
        this.handleShowBalance = this.handleShowBalance.bind(this);
       
    }
    
   handleShowBalance(event) {
       event.preventDefault(); 
       const newShowBalance = !this.state.showBalance; 
       this.setState({showBalance: newShowBalance})
       console.log(newShowBalance)
       this.props.handleRefresh(this.props.ticker, newShowBalance); 
    }

    
    render() {
        const buttonText = this.state.showBalance ?  'HideBalance' : 'ShowBalance'; 
        const amountText = this.state.showBalance ? `Amount = ${this.props.amount}` : ' '; 
        return (
            <Section>   
                
                <p>{amountText}</p> 
                <button onClick = {this.handleShowBalance} >{buttonText}</button>
           </Section>
        )
    }
}

AccountBalance.propTypes = {
   amount: PropTypes.number,
   // showBalance: PropTypes.bool,
};

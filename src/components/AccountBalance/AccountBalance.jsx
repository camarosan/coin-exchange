import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'; 


const Section = styled.section `
text-align: center;
background: transparent;
border-radius: 50px;
border: 2px solid palevioletred;
color: white;
margin: 2 1em;
padding: 0.10em 3em;
`

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ?  'HideBalance' : 'ShowBalance'; 
        const amountText = this.props.showBalance ? `Amount = ${this.props.amount}` : ' '; 
        return (
            <Section>   
                <p>{amountText}</p> 
                <button onClick = {this.props.handleBalanceVisibilityChange} >{buttonText}</button>
           </Section>
            
        )
    }
}

AccountBalance.propTypes = {
   amount: PropTypes.number,
   showBalance: PropTypes.bool,
};

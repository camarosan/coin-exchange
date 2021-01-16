import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section `
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
`

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                Amount = $ {this.props.amount}
                
            </Section>
        )
    }
}

AccountBalance.propTypes = {
   
    amount: PropTypes.number,
   
  };

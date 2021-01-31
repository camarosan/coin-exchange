import React  from 'react'
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

export default function AccountBalance(props)  {
        const buttonText = props.showBalance ?  'HideBalance' : 'ShowBalance'; 
        const amountText = props.showBalance ? `Amount = ${props.amount}` : ' '; 
        return (
            <Section>   
                <p>{amountText}</p> 
                <button onClick = {props.handleBalanceVisibilityChange} >{buttonText}</button>
           </Section>
            
        )
}


AccountBalance.propTypes = {
   amount: PropTypes.number,
   showBalance: PropTypes.bool,
};

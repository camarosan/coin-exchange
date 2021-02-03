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
const Table = styled.table `
border: 1px solid black;
width: 100%;
text-align: center;
font-size: 1.4rem;
`
const Th = styled.th `
border: 1px solid black;
`
const Td = styled.td `
border: 1px solid black;
`


export default function AccountBalance(props)  {
   const handleClick2 = (event) => {  
      event.preventDefault(); 
      props.handleRefresh2(); 
  }
        const buttonText = props.showBalance ?  'HideBalance' : 'ShowBalance'; 
        const amountText = props.showBalance ? `Amount = $${props.amount}` : ' '; 
        return (
            <Section>   
                <p>{amountText}</p> 
                <button onClick = {props.handleBalanceVisibilityChange} >{buttonText}</button> 
                <Table>
                  <thead>
                     <tr>
                        <Th>Market cap in USD</Th>
                        <Th>Volume 24h USD</Th>
                        <Th>Bitcoin Dominance</Th>
                        <Th>Cryptocurrencies Number</Th>
                     </tr>
                  </thead>
                  <tbody >
                     <tr>
                        <Td>${Number(props.global.market_cap_usd)}</Td>
                        <Td>${Number(props.global.volume_24h_usd)}</Td>
                        <Td>{props.global.bitcoin_dominance_percentage}%</Td>
                        <Td>{props.global.cryptocurrencies_number}</Td>
                     </tr>    
                  </tbody>
               </Table>
               <button onClick = {handleClick2}> Refresh Statistics</button>
           </Section>
        )
}


AccountBalance.propTypes = {
   amount: PropTypes.number,
   showBalance: PropTypes.bool,
};

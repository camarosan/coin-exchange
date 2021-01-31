import React from 'react'
import PropTypes from 'prop-types';  

import styled from 'styled-components'
const Td = styled.td` 
    border: 1px solid black;
    width: 60vh;
`


export default function Coin(props)  {
    const handleClick = (event) => {  
        event.preventDefault(); 
        props.handleRefresh(props.id); // pass the id 
    }
        
        return ( 
            <tr>
                <Td>{props.name}</Td>
                <Td>{props.ticker}</Td>
                <Td>${props.price}</Td>
                {props.showBalance ? <Td>${props.balance}</Td> : null }
                
                <Td>
                    <form action = "#" method = "POST"/>  
                        <button onClick={handleClick }>Refresh</button>
                </Td>
            </tr>    
        );
    
}

Coin.propTypes = {
    name: PropTypes.string,
    ticker: PropTypes.string,
    price: PropTypes.number,
    balance: PropTypes.number,  
    id: PropTypes.string, 
};

  
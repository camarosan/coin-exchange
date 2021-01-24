import logo from './logo.svg'; 
import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    color: white;
    height: 10;
`

const Logo = styled.img`
    height: 20vmin;
    pointer-events: none;
`
export default class ExchangeHeader extends Component {
    render() {
        return (
            <Container>
                
                <Logo src={logo} alt="logo"/> Coin Exchange  
                    
                
            </Container>
        )
    }
}

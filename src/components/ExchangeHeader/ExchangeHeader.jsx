import logo from './logo.svg';
import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
`
const H = styled.header`
    background-color: #282c34;
    height: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(20px + 2vmin);
    color: white;
`
const Logo = styled.img`
    height: 20vmin;
    pointer-events: none;
`
export default class ExchangeHeader extends Component {
    render() {
        return (
            <Container>
                
                <H>
                    <Logo src={logo} alt="logo" />
                    Coin Exchange
                </H> 
            </Container>
        )
    }
}

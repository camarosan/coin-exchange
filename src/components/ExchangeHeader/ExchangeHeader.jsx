import logo from './logo.svg'; 
import React from 'react'
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

export default function ExchangeHeader (props) {
        return (
            <Container>
                <Logo src={logo} alt="logo"/> COIN EXCHANGE   
                <form>
                    <label>
                    Helicopter password: <input type= "text" value={props.text}  onChange={props.handleChange} />
                    </label>
                    Text: {props.text}
                </form>
            </Container>
        )
    }

import React, { Component } from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components'

const Table = styled.table` 
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
    text-align: center;
    background-color: #000080;
    -webkit-box-shadow: 16px 17px 77px 75px rgba(0,0,0,0.8); 
    box-shadow: 16px 17px 77px 75px rgba(0,0,0,0.8)
`

export default class CoinList extends Component {
  
  render() {
      return (
        <div>
          <Table>
              <thead> 
                <tr>
                  <th>Name</th>
                  <th>Ticker</th>
                  <th>Price</th>
                  {this.props.showBalance ? <th>Balance</th> : null}
                  <th>Update</th>
                </tr>
              </thead>
            <tbody >
                { 
                this.props.coinData.map(({name, ticker, price, balance}) => <Coin key = {ticker} 
                handleRefresh = {this.props.handleRefresh}
                name = {name} 
                ticker = {ticker} 
                price = {price} 
                balance = {balance}
                showBalance = {this.props.showBalance}/>) 
                }
            </tbody>  
          </Table> 
        </div>
        )
    }
}




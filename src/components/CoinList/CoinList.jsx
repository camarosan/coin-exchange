import React, { Component } from 'react'
import Coin from '../Coin/Coin';

export default class CoinList extends Component {
    render() {
        return (
            <div>
               <table>
        <thead> 
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price Online</th>
            <th>Type</th>
            <th>Update Button</th>
          </tr>
        </thead>
          <tbody >
            {
              this.props.coinData.map(value => <Coin key = {value.ticker} 
              name = {value.name} ticker = {value.ticker} price = {value.price} type = {value.type} />) // key = {ticker} is mandatory to avoid an error 
              
              /*this.state.coinData.map(({name, ticker, price}) => <Coin key = {ticker} 
              name = {name} ticker = {ticker} price = {price} />) // solution 2 
              */
             /*
              this.props.coinData.map(value => <Coin key = {value.ticker}{...value} />
              ) // solution 3 props is change after passing Coin list to a different component */
              }
          </tbody>
         
      </table> 
            </div>
        )
    }
}

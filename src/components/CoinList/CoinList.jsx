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
            <th>Price</th>
            <th>Balance</th>
            <th>Update Button</th>
          </tr>
        </thead>
          <tbody >
            { /*
              this.state.coinData.map(value => <Coin key = {value.ticker} 
              name = {value.name} 
              ticker = {value.ticker} 
              price = {value.price}  />) // key = {ticker} is mandatory to avoid an error */
              
              this.props.coinData.map(({name, ticker, price, balance}) => <Coin key = {ticker} 
              handleRefresh = {this.props.handleRefresh}
              name = {name} 
              ticker = {ticker} 
              price = {price} 
              balance = {balance}/>) // solution 2 
              
              
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




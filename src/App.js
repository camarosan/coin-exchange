import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React  from 'react';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       balance : 10000,
       balance2: 200000,
       prueba : 5000,
       coinData :[
         {
           name: 'Bitcoin',
           ticker: 'BTC',
           price: 9999.99,
           type: 'Bitcoin'
         },
         {
          name: 'Litecoin',
          ticker: 'LTC',
          price: 152,
          type: 'Altcoin'
         },
         {
          name: 'Ethereum ',
          ticker: 'ETH',
          price: 1003,
          type: 'Altcoin'
         },
       ]
    }
  }
  
  render() {
    return (
    <>
      <ExchangeHeader/>
      <AccountBalance amount = {this.state.balance} /> 
      <CoinList coinData ={this.state.coinData} /> 
      
    </>
    )
  }
}


export default App;

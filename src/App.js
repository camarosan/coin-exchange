import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React  from 'react';
import Header from './components/Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       balance : 10000,
       coinData :[
         {
           name: 'Bitcoin',
           ticker: 'BTC',
           price: 9999.99
         },
         {
          name: 'Litecoin',
          ticker: 'LTC',
          price: 152
         },
         {
          name: 'Ethereum ',
          ticker: 'ETH',
          price: 1003
         },
       ]
    }
  }
  
  render() {
    return (
    <>
      <Header header/>
      <AccountBalance amount = {this.state.balance} /> 
      <CoinList coinData ={this.state.coinData} /> 
    </>
    )
  }
}


export default App;

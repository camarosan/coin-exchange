import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React  from 'react';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       balance : 10000,
       coinData :[
         {
           name: 'Bitcoin',
           ticker: 'BTC',
           price: 9999.99, 
         },
         {
          name: 'Litecoin',
          ticker: 'LTC',
          price: 152,
         },
         {
          name: 'Ethereum ',
          ticker: 'ETH',
          price: 1003,
         },
       ]
    }
    this.handleRefresh = this.handleRefresh.bind(this); 
  }
  handleRefresh(valueChangeTicker) { // to find the data 
    const coin = this.state.coinData.find(({ticker}) => ticker === valueChangeTicker); 
    console.log(coin); 
  }
  
  render() {
    return (
    <>
      <ExchangeHeader/>
      <AccountBalance amount = {this.state.balance} /> 
      <CoinList coinData ={this.state.coinData} handleRefresh = {this.handleRefresh} /> 
    
    </>
    )
  }
}

export default App;

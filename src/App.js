import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React  from 'react';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       balance : 20000, 
       showBalance : true,
       
       coinData :[
         {
           name: 'Bitcoin',
           ticker: 'BTC',
           price: 9999.99, 
           balance: 10,
         },
         {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299,
          balance: 40,
         },
         {
          name: 'Tether',
          ticker: 'USDT',
          price: 1,
          balance: 10,
         },
         {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.2,
          balance : 90
         },
         {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 298.99,
          balance : 1,
         },
         {
          name: 'Litecoin',
          ticker: 'LTC',
          price: 139,
          balance : 50,
         },
       ]
    }
    this.handleRefresh = this.handleRefresh.bind(this); 
    
  }

  handleRefresh(valueChangeTicker, value) { // to find the data 
    
    const newCoinData = this.state.coinData.map(({name,ticker,price, balance }) => {
    let newPrice = price;
    
    
    
     
    
    
    if (valueChangeTicker=== ticker || value === true) {
      const randomPercentage = 0.995 + Math.random() *0.01;
      newPrice = newPrice*randomPercentage;

       
    }
    
    return {
      name,
      ticker, 
      price: newPrice,
      balance  
    }
    
    }); 
    this.setState({coinData: newCoinData})
    
  }

  
  
  render() {
    return (
    <>
      <ExchangeHeader/>
      <AccountBalance amount = {this.state.balance} showBalance  = {this.state.showBalance}
      handleRefresh = {this.handleRefresh} /> 
      <CoinList coinData ={this.state.coinData} handleRefresh = {this.handleRefresh} /> 
    
    </>
    )
  }
}

export default App;

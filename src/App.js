import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React  from 'react';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'
import axios from 'axios'; 


const COINCOUNT = 10; 
const ContainerAll = styled.div`
    background-color: #282c34;
    height: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(20px + 2vmin);
    color: white;
    `


class App extends React.Component {
  state = { // put here for class properties 
       balance : 20000, 
       showBalance : true,
       
       coinData :[ 
         /*{
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
         },*/
       ] 
    }
    

  handleRefresh = async (keyid) => {  
    const promise = await axios.get('https://api.coinpaprika.com/v1/tickers/'+ keyid);
    const newCoinData = this.state.coinData.map((values) => { // changed to a function with shallow copy 
    let newValues = {...values}; // shallow copy cloning objects in javascript 
      if (keyid=== values.key) {
        const updatePrice = parseFloat(Number(promise.data.quotes.USD.price).toFixed(4));
        newValues.price =  updatePrice;   
      }
      return newValues
    }); 
      this.setState({coinData: newCoinData})
  }
      

  handleBalanceVisibilityChange = () =>{ // for class property  we do not need to bind  arrow function
    this.setState(function(oldState){ // another way to write 
      return {
        ...oldState, // avoiding copy any of the objects 
        showBalance: !oldState.showBalance
      }
    })
  }


  componentDidMount = async () => { //for lifecicles methods and use await and async function 
    const response = await axios.get('https://api.coinpaprika.com/v1/coins') // with axios no need to use json 
    const coinIds = response.data.slice(0, COINCOUNT).map(coin=> coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id =>axios.get(tickerUrl + id)); 
    const coinData =  await Promise.all(promises);
    const coinPriceData = coinData.map((response) =>{
        const coin = response.data; 
        return {
         key: coin.id, // always return a key for render 
         id: coin.id,
         name: coin.name,
         ticker:coin.symbol,
         balance: 0, 
         price: parseFloat(Number(coin.quotes.USD.price).toFixed(4)),
      };
    }); 
    this.setState({coinData: coinPriceData});
  }


  componentDidUpdate= () => { //for lifecicles methods
    console.log('UPDATE')
  }


render() {
    return (
    <ContainerAll>
      <ExchangeHeader/>
      <AccountBalance amount = {this.state.balance} showBalance  = {this.state.showBalance}
      handleBalanceVisibilityChange = {this.handleBalanceVisibilityChange}/> 
      <CoinList coinData ={this.state.coinData} handleRefresh = {this.handleRefresh}
      showBalance = {this.state.showBalance}/> 
    </ContainerAll>
    )
  }
}

export default App;

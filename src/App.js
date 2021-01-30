import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React  from 'react';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'
import axios from 'axios'; 

const formatPrice = price => parseFloat(Number(price).toFixed(4));
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
  state = { 
       balance : 20000, 
       showBalance : true,
       coinData :[ ] 
    }
    

  handleRefresh = async (valueChangeId) => {  // receive the id with valueChangeId changed
    const tickerUrl =  `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = this.state.coinData.map((values) => { 
    let newValues = {...values}; 
      if (valueChangeId=== values.key) {
        newValues.price =  newPrice;  // update price with new price 
      }
      return newValues;
    }); 
      this.setState({coinData: newCoinData}) 
  }
      

  handleBalanceVisibilityChange = () =>{ 
    this.setState(function(oldState){ 
      return {
        ...oldState, 
        showBalance: !oldState.showBalance
      }
    })
  }


  componentDidMount = async () => { 
    const response = await axios.get('https://api.coinpaprika.com/v1/coins'); 
    const coinIds = response.data.slice(0, COINCOUNT).map(coin=> coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id =>axios.get(tickerUrl + id)); 
    const coinData =  await Promise.all(promises);
    const coinPriceData = coinData.map((response) =>{
        const coin = response.data; 
        return {
         key: coin.id, 
         id: coin.id,// New i cannot use key
         name: coin.name,
         ticker:coin.symbol,
         balance: 0, 
         price: formatPrice(coin.quotes.USD.price), // changed 
        }
    }); 
    this.setState({coinData: coinPriceData});
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

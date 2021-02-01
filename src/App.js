import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React,  {useState, useEffect} from 'react';
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

function App(props) { // new for hooks and function components
    const [balance, setBalance] = useState(10000);
    const [showBalance, setShowtbalance] = useState(true);
    const [coinData, setCoindata] = useState([]);
    

  const handleRefresh = async (valueChangeId) => {  // receive the id with valueChangeId changed
    const tickerUrl =  `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map((values) => { 
    let newValues = {...values}; 
      if (valueChangeId=== values.key) {
        newValues.price =  newPrice;  
      }
      return newValues;
    }); 
      setCoindata(newCoinData); // new for hooks 
  }
      

  const handleBalanceVisibilityChange = () =>{ 
    setShowtbalance(oldValue => !oldValue); // new for hooks 
  }

  const componentDidMount = async () => { 
      const response = await axios.get('https://api.coinpaprika.com/v1/coins'); 
      const coinIds = response.data.slice(0, COINCOUNT).map(coin=> coin.id);
      const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
      const promises = coinIds.map(id =>axios.get(tickerUrl + id)); 
      const coinData =  await Promise.all(promises);
      const coinPriceData = coinData.map((response) =>{
          const coin = response.data; 
          return {
           key: coin.id, 
           id: coin.id,
           name: coin.name,
           ticker:coin.symbol,
           balance: 0, 
           price: formatPrice(coin.quotes.USD.price), 
          }
      }); 
      setCoindata(coinPriceData); // new for hooks, component did mount 
  } 
    
  useEffect( () => { // new for hooks and function Components
    if(coinData.length === 0) {
      componentDidMount(); 
    }
  });
  
    return ( // new for hooks and function Components
    <ContainerAll>
      <ExchangeHeader/>
      <AccountBalance amount = {balance} showBalance  = {showBalance}
      handleBalanceVisibilityChange = {handleBalanceVisibilityChange}/> 
      <CoinList coinData ={coinData} handleRefresh = {handleRefresh}
      showBalance = {showBalance}/> 
    </ContainerAll>
    )
  
}

export default App;

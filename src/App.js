import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React,  {useState, useEffect} from 'react';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'
import axios from 'axios'; 
import { sha256 } from 'js-sha256';


const formatPrice = price => parseFloat(Number(price).toFixed(4));
const COINCOUNT = 10; 
const hashPassword  = "4525788bce6d3098bdf6746f7de36cbdbd155eb991f4cd789a384376d3a83ba9";
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
    const [global, setGlobal] = useState([]);
    const [text, setText] = useState(""); 
    

    const handleChange = e => {
      if(sha256(e.target.value)=== hashPassword) {
        const bailoud = balance + 10000;
        setBalance(bailoud);
      }
      setText(e.target.value)
    }

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
    
  const componentDidMount2 = async () => { 
    const urlGeneral = `https://api.coinpaprika.com/v1/global`
    const promise = await axios.get(urlGeneral);
    const generalData = promise.data;     
    setGlobal (generalData);
  }

  const handleRefresh2 = async () => { 
    const promise = await axios.get(`https://api.coinpaprika.com/v1/global`);
    setGlobal (promise.data);
  }

 
  useEffect( () => { 
    if(coinData.length === 0) {
      componentDidMount(); 
      componentDidMount2(); 
    }
  });
  
  
    return ( 
    <ContainerAll>
      <ExchangeHeader handleChange = {handleChange}/>
      <AccountBalance amount = {balance} showBalance  = {showBalance}
      handleBalanceVisibilityChange = {handleBalanceVisibilityChange}
      handleRefresh2 = {handleRefresh2}  global = {global}/> 
      <CoinList coinData ={coinData} handleRefresh = {handleRefresh}
      showBalance = {showBalance}/> 
    </ContainerAll>
    )
  
}

export default App;

import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

  


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Coin Exchange
      </header>
      <AccountBalance amount = {10000} /> 
      <table>
        <thead> 
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price Online</th>
            <th>Update Button</th>
          </tr>
        </thead>
          <tbody >
            <Coin name = "Bitcoin"  ticker = "BTC" price = {31412.99}/>
            <Coin name = "Litecoin" ticker = "LTC" price = {152} />
            <Coin name = "Ethereum" ticker = "ETH" price = {1003} />
            <Coin name = "EOS"/>
          </tbody>
      </table>
    </div>
  );
}

export default App;

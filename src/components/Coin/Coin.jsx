import React, { Component } from 'react'
import './Coin.css';
import PropTypes from 'prop-types'; // for use with Component.propTypes 

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.state = {
            priceOnline: this.props.price
        } 
        this.handleClick = this.handleClick.bind(this); // mandatory event bindings
    }
    /*componentDidMount() {
        const callback = () => {
            const randomPercentage = 0.995 + Math.random() *0.01;

            this.setState(function(oldState) {
                return {
                    priceOnline: oldState.priceOnline * randomPercentage
                }
            });
        }
        setInterval(callback, 1000);
    }*/

    handleClick(event) {
        // prevent the default action of submitting the form 
         event.preventDefault(); // for check the error when you click on Refresh Button 
        const randomPercentage = 0.995 + Math.random() *0.01;

            this.setState(function(oldState) {
                return {
                    priceOnline: oldState.priceOnline * randomPercentage
                }
            });
    }
        
    render() {
        return (
            <tr className = "Coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.props.price}</td>
                <td>${this.state.priceOnline}</td>
                <td>
                    <form action = "#" method = "POST"> // action and method are mandatory 
                    <button onClick={this.handleClick}> Refresh </button>
                    </form>
                </td>
              </tr>
        );
    }
}

Component.propTypes = {
   
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string,
    price: PropTypes.number,
  };

  
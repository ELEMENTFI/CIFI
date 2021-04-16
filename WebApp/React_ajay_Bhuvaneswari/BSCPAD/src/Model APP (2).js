//import React from 'react';
import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import oracle from './oracle';


class App extends Component {
  state = {
    balance: '',
    totalSupply:'',
    circulatingsupply:'',
    price:''


  };

  async componentDidMount() {
   
    const balance = await web3.eth.getBalance(lottery.options.address);
    const totalsupply = await lottery.methods.totalSupply().call();
    const price=await oracle.methods.getDollarPrice().call();
  
    this.setState({totalsupply,price,balance});
  }

  render()
   {
    console.log(web3.version);

    web3.givenProvider.enable().then(console.log);
    return (
      <div>
        <div>
        <button class="pay-button">Pay</button>
        <div id="status"></div>
        </div>
        <h2>Bdollar Contract</h2>
        <button class="pay-button">Pay</button>

        <p>
           total supply <br/> {this.state.totalsupply}. 
        </p>
        <p>
          price<br/> {this.state.price}.
      </p>
        <p>
          balanceOf<br/> {this.state.balance}.
         </p>

        <hr />

        </div>
    );
  }
}

export default App;

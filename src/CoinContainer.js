import React, { Component } from 'react';
import Coin from './Coin'
import {randomCoin} from './helpers';
import './CoinContainer.css';

class CoinContainer extends Component{
    static defaultProps = {
        coins: [
            {side: 'head', imgSrc: require('./images/head.png')},
            {side: 'tail', imgSrc: require('./images/tail.png')}
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            numFlip: 0,
            numTails: 0,
            numHeads: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        const newCoin = randomCoin(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                numFlip: st.numFlip + 1,
                numTails: st.numTails + (newCoin.side === 'tail' ? 1 : 0),
                numHeads: st.numHeads + (newCoin.side === 'head' ? 1 : 0)
            }
        })
    }

    handleClick(e){
        this.flipCoin();
    }

    render(){
        return(
            <div className='CoinContainer'>
                <h1>Kara Krus</h1>
                {this.state.currCoin && <Coin info = {this.state.currCoin} />}
                <button onClick = {this.handleClick}>Flip the Coin!</button>
                <h3>Flips: {this.state.numFlip}</h3>
                <h3>Heads: {this.state.numHeads}</h3>
                <h3>Tails: {this.state.numTails}</h3>
            </div>
        )
    }
}

export default CoinContainer;
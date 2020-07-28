import React, { Component } from 'react';

class Coin extends Component{
    render(){
        return(
            <div>
                <img alt={this.props.info.side} src={this.props.info.imgSrc} />
            </div>
        )
    }
}

export default Coin;
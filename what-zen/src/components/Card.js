import React, { Component } from 'react';
import '../styles/card.css'

class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <div className="Card">
        {this.props.text}
      </div>
    );
  }
}

export default Card;

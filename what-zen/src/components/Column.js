import React, { Component } from 'react';
import Card from './Card'
import '../styles/column.css'

class Column extends Component {
  state = {
    cards: [
      {id: 1, text: 'a'},
      {id: 2, text: 'b'},
      {id: 3, text: 'c'},
      {id: 4, text: 'd'},
    ]
  }

  render() {
    return (
      <div className="Column">
        {this.state.cards.map(card => <Card key={card.id} text={card.text}/>)}
      </div>
    );
  }
}

export default Column;

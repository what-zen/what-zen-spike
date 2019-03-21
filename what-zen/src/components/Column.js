import React, { Component } from 'react';
import Card from './Card'
import AddCardForm from './AddCardForm'
import '../styles/column.css'

class Column extends Component {
  state = {
    cards: [
      {id: 1, body: 'a'},
      {id: 2, body: 'b'},
      {id: 3, body: 'c'},
      {id: 4, body: 'd'},
    ]
  }

  render() {
    return (
      <div className="Column">
        <AddCardForm></AddCardForm>
        {this.state.cards.map(card => <Card key={card.id} text={card.body}/>)}
      </div>
    );
  }
}

export default Column;

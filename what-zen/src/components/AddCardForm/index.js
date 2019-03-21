import ReactQueryParams from 'react-query-params';
import React from 'react';

class AddCardForm extends ReactQueryParams {

  handleAddCard = () => {
    console.log("buttone was clickled")
  }

  render() {
    return (
      <form className="AddCardForm">
        <input type="text-field" name="body"></input>
        <button onClick={this.handleAddCard} type="Submit">add a new card</button>
      </form>
    )
  }
}

export default AddCardForm;

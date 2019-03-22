import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class AddCardFormBase extends Component {
  constructor(props) {
    super(props);
  }

  handleAddCard = () => {
    console.log("buttone was clickled")
    const id = 1
    console.log(this)
    console.log(this.props)
    this.props.firebase.db().ref('test-table/' + id).set({
      testfact: 'hello'
    });
  }

  render() {
    return (
      <form className="AddCardForm">
        <input type="text-field" name="body"></input>
        <p onClick={this.handleAddCard}>add a new card</p>
      </form>
    )
  }
}

const AddCardForm = withFirebase(AddCardFormBase);

export default AddCardForm;

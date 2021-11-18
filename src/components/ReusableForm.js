import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import EditItemForm from "./EditItemForm";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";


// var itemName = "";

// if (Item.name !== null) {
//   itemName = Item.name;
// } else {
//   itemName = 'Item Name';
// }



function ReusableForm(props) {
  // var itemName = "";
  // console.log(ItemList);
  // console.log(ItemList.name);
  // if (ItemList.quantity !== itemName) {
  //   itemName = ItemList.quantity;
  // } else {
  //   itemName = 'Item Name';
  // }
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          // defaultValue={itemName} />
          placeholder='Item Name' />
        <input
          type='number'
          name='quantity'
          min='0'
          placeholder='Quantity #' />
        <textarea
          name='description'
          placeholder='Describe your item.' />
        <button type='submit'>Add Item!</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
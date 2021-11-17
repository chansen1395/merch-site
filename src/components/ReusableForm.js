import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <input
          type='number'
          name='quantity'
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
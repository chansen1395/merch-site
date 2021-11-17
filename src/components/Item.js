import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <button>Item Details</button>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  // quantity: PropTypes.number.isRequired,
  // description: PropTypes.string
};

export default Item;
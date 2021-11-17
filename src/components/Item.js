import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <button onClick = {() => props.whenItemClicked(props.id)}>Item Details</button>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;
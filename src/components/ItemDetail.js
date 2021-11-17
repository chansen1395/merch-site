import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item } = props;

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.name} - {item.quantity} currently in stock</h3>
      <p><em>{item.description}</em></p>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;
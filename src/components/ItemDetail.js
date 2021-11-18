import React from "react";
import PropTypes from "prop-types";


function ItemDetail(props){
  const { item, onClickingDelete, onClickingEdit, onClickingSell } = props;

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.name} - {item.quantity} currently in stock</h3>
      <p><em>{item.description}</em></p>
      <button onClick={ onClickingEdit }>Update Item</button>
      <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button>
      {/* WIP Sell Item */}
      <button onClick={()=> onClickingSell(item.id) }>Sell Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default ItemDetail;
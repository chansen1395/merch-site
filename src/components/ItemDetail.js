import React from "react";
import PropTypes from "prop-types";


function ItemDetail(props){
  const { item, onClickingDelete, onClickingEdit, onClickingBuy, onClickingRestock } = props;

  // declare the itemHeader to make the computer happy
  var itemHeader = "";

  if (item.quantity > 0){
    itemHeader = <h3>{item.name} - {item.quantity} currently in stock</h3>;
  } else {
    itemHeader = <h3>{item.name} - is not in stock <span role="img">☹️</span></h3>;
  };

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      {itemHeader}
      {/* <h3>{item.name} - {item.quantity} currently in stock</h3> */}
      <p><em>{item.description}</em></p>
      <button onClick={ onClickingEdit }>Update Item</button>
      <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button>
      <button onClick={ onClickingBuy }>Buy 1 Item</button>
      <button onClick={ onClickingRestock }>Restock 1 Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default ItemDetail;
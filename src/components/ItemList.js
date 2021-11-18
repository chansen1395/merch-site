import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";


function ItemList(props) { // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
      {props.itemList.map((item) => // Loop through the list passed down from ItemControl.
        <Item
          whenItemClicked = { props.onItemSelection }
          name={item.name}
          quantity={item.quantity}
          description={item.description}
          id={item.id} 
          key={item.id} />
      )}
    </React.Fragment>
  );
}

// Add propTypes for itemList.
ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;
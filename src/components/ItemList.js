import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";


function ItemList(props) { // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
      {props.itemList.map((item, index) => // Loop through the list passed down from ItemControl.
        <Item name={item.name}
          quantitity={item.quantitity}
          description={item.description}
          key={index} />
      )}
    </React.Fragment>
  );
}

// Add propTypes for itemList.
ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;
import React from "react";
import PropTypes from "prop-types";

// // *** BEGIN WIP *** //
// import { Link } from "react-router-dom"; 
// import Details from "./Details";

// class App extends Details {
//   render() {
//     return(
//       <div>
//          <Link to="./Details" className="btn btn-primary">hello</Link>
//       </div>
//      );
//     }
//   }
//   // *** END WIP *** //

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <button>Item Details</button>
      <button>Delete Item</button>
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
import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: []
    };
    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  // *** BEGIN WIP READ ITEMDETAILS *** //
  handleItemDetails = (id) => {
    const newMainItemList = this.state.mainItemList.concat(id);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }
  // *** END WIP READ ITEMDETAILS *** //
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
        buttonText = "Return to Item List";
      } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} />;
      buttonText = "Add Item"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default ItemControl;
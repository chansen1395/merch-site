import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';


class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  handleItemDetail = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }
  
  handleEditClick = () => {
    this.setState({editing: true});
  }
  
  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }
  
  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
    .filter(item => item.id !== this.state.selectedItem.id)
    .concat(itemToEdit);
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
      selectedItem: null
    });
  }
  
  handleBuyItem = () => {
  
    let buyItem = this.state.mainItemList.filter(item => item.id === this.state.selectedItem.id)[0];

    if (buyItem.quantity <= 0){
      alert(buyItem.name + " is out of stock. Please restock or choose another item.");
    } else {
    buyItem = buyItem.quantity--;

    this.setState({
      buyItem: buyItem
    });
    }
  }

  handleRestockItem = () => {
  
    let restockItem = this.state.mainItemList.filter(item => item.id === this.state.selectedItem.id)[0];

    restockItem = restockItem.quantity++;

    this.setState({
      restockItem: restockItem
    });
  }
  // *** END WIP READ INVENTORY CHANGES *** //
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditItemForm 
        item = {this.state.selectedItem}
        onEditItem = {this.handleEditingItemInList} />
      buttonText = "Stop Editing";

    } else if (this.state.selectedItem != null) {
      currentlyVisibleState = 
      <ItemDetail 
        item = {this.state.selectedItem} 
        onClickingDelete = {this.handleDeletingItem} 
        onClickingEdit = {this.handleEditClick}      
        onClickingBuy = {this.handleBuyItem}      
        onClickingRestock = {this.handleRestockItem} />      
        
        buttonText = "Return to Item List";
    }

    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
        buttonText = "Return to Item List";
    
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} onItemSelection={this.handleItemDetail}/>;
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
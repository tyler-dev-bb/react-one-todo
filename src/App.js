import React from 'react';
import './App.css';
import ListItem from './ListItem';
import Anjana from './Anjana';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      anjana: false,
      currentItem: {
        text: '',
        key: '',
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem)
    if (newItem.text !== "") {
      const anjana = 'anjana as';
      const anjana_as = (newItem.text.toUpperCase() === anjana.toUpperCase()) ? newItem.text.toUpperCase() : null;
      const newItems = [...this.state.items, newItem ];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        },
        anjana: (anjana_as) ? true : false
      })
    }
  }

  deleteItems(key) {
    const filteredItems = this.state.items.filter(item => 
      item.key !== key
    );
    this.setState({
      items: filteredItems
    })
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
        if (item.key === key) {
          item.text = text;
        }
    })
    this.setState({
      items: items
    })
  }

  render() {
    return (
      
      <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" 
          value={this.state.currentItem.text} 
          onChange={this.handleInput}
          placeholder="Enter Text" />
          <button type="submit">Add</button>
      </form>
      </header>
      { !this.state.anjana ? 
        <ListItem setUpdate={this.setUpdate} deleteItems={this.deleteItems} items = {this.state.items}/>
      : <Anjana deleteItems={this.deleteItems} items = {this.state.items}/> }
      
      </div>
    )
  }
}

export default App;

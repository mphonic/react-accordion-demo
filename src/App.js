import React from 'react';
import Accordion from './components/Accordion';
import items from './data/AccordionItems';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: []
    }
    this.getItems();
  }

  getItems() {
    Promise.resolve(items)
      .then(data => {
        this.setState({ items: data })
      });
  }

  render() { 
    return (
      <div className="App">
        <h2>FAQ</h2>
        <Accordion items={this.state.items} />
      </div>
    );
  }
}

export default App;

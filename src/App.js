import React from 'react';
import Accordion from './components/Accordion';
// get dummy data
import items from './data/AccordionItems';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      accordionItems: []
    }
  }

  componentDidMount() {
    this.getAccordionItems();
  }

  getAccordionItems() {
    Promise.resolve(items)
      .then(data => {
        this.setState({ accordionItems: data })
      });
  }

  render() { 
    return (
      <div className="App">
        <h2>FAQ</h2>
        <Accordion items={this.state.accordionItems} />
      </div>
    );
  }
}

export default App;

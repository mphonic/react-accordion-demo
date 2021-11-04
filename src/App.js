import { useState } from 'react';
import Accordion from './components/Accordion';
import items from './data/AccordionItems';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <h2>FAQ</h2>
      <Accordion items={items} />
    </div>
  );
}

export default App;

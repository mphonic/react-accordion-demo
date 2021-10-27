import { useState, useEffect, useCallback } from 'react';
import Accordion from './components/Accordion';
// get dummy data
import items from './data/AccordionItems';

import './App.css';

const App = () => {
  const [accordionItems, setAccordionItems] = useState([]);

  useEffect(() => {
    getAccordionItems();
  }, [])


  const getAccordionItems = useCallback(() => {
    Promise.resolve(items)
      .then(data => {
        setAccordionItems(data);
      });
  }, []);

  return (
    <div className="App">
      <h2>FAQ</h2>
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;


import { useState, useEffect } from 'react';
import AccordionItem from './components/AccordionItem';
import items from './data/AccordionItems';
import './App.css';

const App = () => {
  const [accordionItems, setAccordionItems] = useState([]);

  useEffect(() => {
    getAccordionItems();
  }, []);

  const getAccordionItems = () => {
    Promise.resolve(items)
      .then(data => setAccordionItems(data));
  }

  return (
    <div className="App">
      <h2>FAQ</h2>
      {
        accordionItems.map((e, c) => <AccordionItem key={`ai${c}`} title={e.title} content={e.content} />)
      }
    </div>
  );
}

export default App;

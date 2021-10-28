import React from 'react';
import AccordionItem from './components/AccordionItem';
import items from './data/AccordionItems';

import './App.css';

class App extends React.Component {

  render() { 
    return (
      <div className="App">
        <h2>FAQ</h2>
        {
          items.map((e, c) => (
            <AccordionItem
              key={`item${c}`}
              title={e.title}
              detail={e.content}
            />
          ))
        }
      </div>
    );
  }
}

export default App;

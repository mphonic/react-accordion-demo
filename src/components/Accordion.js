import { useState, useEffect, useCallback } from "react";
import AccordionItem from "./AccordionItem";

import "./Accordion.css";

const Accordion = (props) => {
    const [items, setItems] = useState(props.items);
    const [selectedItem, setSelectedItem] = useState(null);
    
    useEffect(() => {
        setItems(props.items);
    }, [props.items]);

    const itemChanged = useCallback((index, isActive) => {
        setSelectedItem(isActive ? index : null);
    }, []);
    
    if (!items || !items.length) return ''; 

    return (
        <section className="accordion__container">
            {
            items.map((item, c) => (
                <AccordionItem 
                    key={c} 
                    title={item.title} 
                    content={item.content} 
                    isActive={(c === selectedItem)} 
                    onChange={(active) => itemChanged(c, active)} />
            ))
            }
        </section>
    )
}

export default Accordion;
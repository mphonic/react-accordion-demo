import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const itemChanged = (index, isActive) => {
        setSelectedItem(isActive ? index : null);
    }

    return (
        <section className="accordion__container">
            {
                items.map((e, c) => (
                    <AccordionItem
                        key={`item${c}`}
                        title={e.title}
                        detail={e.content}
                        isActive={c === selectedItem}
                        onChange={(active) => itemChanged(c, active)}
                    />
                ))
            }
        </section>
    )
}

export default Accordion;
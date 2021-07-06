
import { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

const AccordionItem = (props) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState('0px');

    const contentElement = useRef();

    const toggleAccordion = () => {
        updateAccordionView(!active);
    }

    const updateAccordionView = (active) => {
        const height = !active ? '0px' : `${contentElement.current.scrollHeight}px`;
        setActive(active);
        setHeight(height);
    }
   
    return (
        <div className="accordion__section">
            <button className={`accordion${active ? ' active' : ''}`} onClick={() => toggleAccordion()}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`accordion__icon${active ? ' rotate' : ''}`} width={10} fill={"#777"} />
            </button>
            <div className="accordion__content" ref={contentElement} style={{ maxHeight: `${height}`}}>
                <div className="accordion__text">{props.content}</div>
            </div>
        </div>
    );
}

export default AccordionItem;
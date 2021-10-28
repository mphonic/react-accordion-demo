import { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

const AccordionItem = ({ title, detail }) => {   
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState('0px');

    const contentElement = useRef();

    const toggleAccordion = () => {
        const localHeight = active ? '0px' : `${contentElement.current.scrollHeight}px`;
        setActive(!active);
        setHeight(localHeight);
    }

    return (
        <div className="accordion__section">
            <button className={`accordion${active ? ' active' : ''}`} onClick={() => { toggleAccordion() }}>
                <p className="accordion__title">{title}</p>
                <Chevron className={`accordion__icon${active ? ' rotate' : ''}`} width={10} fill={"#777"} />
            </button>
            <div ref={contentElement} className="accordion__content" style={{ maxHeight: `${height}` }}>
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html: detail }}></div>
            </div>
        </div>
    );
}

export default AccordionItem;
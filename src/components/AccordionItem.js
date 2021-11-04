import { useState, useEffect, useCallback, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

const AccordionItem = ({ title, detail, isActive, onChange }) => {   
    const [active, setActive] = useState(false);

    const contentElement = useRef();

    useEffect(() => {
        if (isActive === active) return;
        setActive(isActive);
    }, [isActive]);

    const toggleAccordion = () => {
        setActive(!active);
        onChange && onChange(!active);
    };

    return (
        <div className="accordion__section">
            <button className={`accordion${active ? ' active' : ''}`} onClick={() => { toggleAccordion() }}>
                <p className="accordion__title">{title}</p>
                <Chevron className={`accordion__icon${active ? ' rotate' : ''}`} width={10} fill={"#777"} />
            </button>
            <div ref={contentElement} className="accordion__content" style={{ maxHeight: `${active ? contentElement.current.scrollHeight : 0}px`}}>
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html: detail }}></div>
            </div>
        </div>
    );
}

export default AccordionItem;
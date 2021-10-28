import { useState, useEffect, useRef, useCallback } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

const AccordionItem = ({ title, content, isActive, onChange }) => {
    const [active, setActive] = useState(false);

    const contentElement = useRef();

    useEffect(() => {
        if (isActive === active) return;
        setActive(isActive);
    }, [isActive]);

    const toggleAccordion = useCallback(() => {
        setActive(!active);
        onChange && onChange(!active);
    }, [active, onChange]);

    return (
        <div className="accordion__section">
            <button className={`accordion${active ? ' active' : ''}`} onClick={toggleAccordion}>
                <p className="accordion__title">{title}</p>
                <Chevron className={`accordion__icon${active ? ' rotate' : ''}`} width={10} fill={"#777"} />
            </button>
            <div
                ref={contentElement}
                style={{ maxHeight: `${active ? contentElement.current.scrollHeight : 0}px` }}
                className="accordion__content"
            >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
}

export default AccordionItem;
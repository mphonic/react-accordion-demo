import { useState, useEffect, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

const AccordionItem = ({ title, content, isActive, onChange }) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState('0px');

    const contentElement = useRef();

    useEffect(() => {
        if (isActive === active) return;
        updateAccordionView(isActive);
    }, [isActive]);

    const toggleAccordion = () => {
        onChange(!active);
        updateAccordionView(!active);
        if (!onChange) return;
    }

    const updateAccordionView = (active) => {
        const height = !active ? '0px' : `${contentElement.current.scrollHeight}px`; // if current state is active, set height to 0
        setActive(active);
        setHeight(height);
    }

    return (
        <div className="accordion__section">
            <button className={`accordion${active ? ' active' : ''}`} onClick={() => {toggleAccordion() }}>
                <p className="accordion__title">{title}</p>
                <Chevron className={`accordion__icon${active ? ' rotate' : ''}`} width={10} fill={"#777"} />
            </button>
            <div
                ref={contentElement}
                style={{ maxHeight: `${height}` }}
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
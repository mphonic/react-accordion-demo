import React from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

class Accordion extends React.Component {

    render() {
        return (
            <div className="accordion__section">
                <button className="accordion">
                    <p className="accordion__title"></p>
                    <Chevron className="accordion__icon" width={10} fill={"#777"} />
                </button>
                <div
                    className="accordion__content"
                >
                    <div
                        className="accordion__text"
                    />
                </div>
            </div>
        );
    }
}

export default Accordion;
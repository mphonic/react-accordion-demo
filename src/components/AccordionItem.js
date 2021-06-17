import React from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

class AccordionItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            height: '0px'
        }
        this.contentElement = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (this.props.isActive === prevProps.isActive || this.state.active === this.props.isActive) return;
        this.updateAccordionView(this.props.isActive);
    }

    toggleAccordion() {
        const active = !this.state.active;
        this.updateAccordionView(active);
        if (!this.props.onChange) return;
        this.props.onChange(active);
    }

    updateAccordionView(active) {
        const height = !active ? '0px' : `${this.contentElement.current.scrollHeight}px`; // if current state is active, set height to 0
        this.setState({ active: active, height: height });
    }

    render() {
        return (
            <div className="accordion__section">
                <button className={`accordion${this.state.active ? ' active' : ''}`} onClick={() => { this.toggleAccordion() }}>
                    <p className="accordion__title">{this.props.title}</p>
                    <Chevron className={`accordion__icon${this.state.active ? ' rotate' : ''}`} width={10} fill={"#777"} />
                </button>
                <div
                    ref={this.contentElement}
                    style={{ maxHeight: `${this.state.height}` }}
                    className="accordion__content"
                >
                    <div
                        className="accordion__text"
                        dangerouslySetInnerHTML={{ __html: this.props.content }}
                    />
                </div>
            </div>
        );
    }
}

export default AccordionItem;
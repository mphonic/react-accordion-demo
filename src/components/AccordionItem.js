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

    toggleActive() {
        const active = !this.state.active;
        const height = !active ? '0px' : this.contentElement.current.scrollHeight + 'px';
        this.setState({ active: active, height: height });
        console.log('active?', this.state.active);
    }    

    render() {
        return (
            <div className="accordion__section">
                <button className={`accordion${this.state.active ? ' active': ''}`} onClick={event => this.toggleActive()}>
                    <p className="accordion__title">{this.props.title}</p>
                    <Chevron className={`accordion__icon${this.state.active ? ' rotate': ''}`} width={10} fill={"#777"} />
                </button>
                <div className="accordion__content" ref={this.contentElement} style={{ maxHeight: `${this.state.height}`}}>
                    <div className="accordion__text" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
                </div>
            </div>
        );
    }
}

export default AccordionItem;
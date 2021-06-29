import React from "react";

import "./Accordion.css";
import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }

    componentDidUpdate(prevProps) {
        console.log('this component updated');
        if (prevProps.items === this.props.items) return;
        this.setState({ items: this.props.items });
    }

    render() {

        return (
            <section className="accordion__container">
                {
                    this.state.items.map(e => <AccordionItem title={e.title} content={e.content} />)
                }
            </section>
        )
    }
}

export default Accordion;
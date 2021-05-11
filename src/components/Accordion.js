import React from "react";
import AccordionItem from "./AccordionItem";

import "./Accordion.css";

class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
            selectedItem: null
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.items === this.props.items) return;
        this.setState({ items: this.props.items });
    }

    itemChanged(index, isActive) {
        this.setState({ selectedItem: isActive ? index : null });
    }

    render() {
        if (!this.state.items || !this.state.items.length) return ''; 

        return (
            <section className="accordion__container">
                {
                this.state.items.map((item, c) => (
                    <AccordionItem 
                        key={c} 
                        title={item.title} 
                        content={item.content} 
                        isActive={!!(c === this.state.selectedItem)} 
                        onChange={(active) => this.itemChanged(c, active)} />
                ))
                }
            </section>
        )
    }
}

export default Accordion;